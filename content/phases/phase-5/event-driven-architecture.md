---
id: event-driven-architecture
title: Event-Driven Architecture
phase: 5
order: 5
difficulty: Advanced
---

# Event-Driven Architecture

## Overview

**Event-driven architecture (EDA)** is a software design pattern where the flow of the program is determined by events. For structured products, this pattern is essential because product behavior is fundamentally event-driven: prices change, barriers are checked, coupons are paid.

This topic connects financial concepts to concrete software architecture patterns.

## Why Event-Driven for Structured Products?

### Natural Fit

Structured products ARE event-driven:
- Market data events → Pricing updates
- Observation dates → Trigger evaluations
- Corporate actions → Parameter adjustments
- Barrier breaches → Product termination

### Benefits

| Benefit | Description |
|---------|-------------|
| **Scalability** | Handle millions of products |
| **Decoupling** | Components can evolve independently |
| **Real-time** | React to market events immediately |
| **Auditability** | Complete event history |
| **Resilience** | Recover from failures |

## Core Concepts

### Events

An **event** is an immutable fact that something happened.

```json
{
  "eventType": "BARRIER_BREACHED",
  "timestamp": "2024-03-15T14:30:22.123Z",
  "data": {
    "isin": "DE000TB12345",
    "underlying": "DAX",
    "barrierLevel": 14000,
    "breachPrice": 13998.50,
    "breachType": "CONTINUOUS"
  }
}
```

### Event Types for Structured Products

| Category | Events |
|----------|--------|
| **Market Data** | PriceUpdated, VolatilityChanged |
| **Lifecycle** | ObservationDateReached, CouponFixed, Autocalled |
| **Barrier** | BarrierApproaching, BarrierBreached |
| **Corporate Action** | DividendAnnounced, SplitDetected |
| **Settlement** | SettlementCalculated, PaymentInitiated |

### Event Producers and Consumers

```
PRODUCERS                    CONSUMERS
┌──────────────┐            ┌──────────────┐
│ Market Data  │────────┐   │   Pricing    │
│    Feed      │        │   │   Engine     │
└──────────────┘        │   └──────────────┘
                        │
┌──────────────┐        │   ┌──────────────┐
│  Scheduler   │───┐    │   │    Risk      │
│              │   │    ├──►│   System     │
└──────────────┘   │    │   └──────────────┘
                   │    │
┌──────────────┐   │    │   ┌──────────────┐
│  Corporate   │───┼────┘   │  Settlement  │
│   Action     │   │        │   System     │
└──────────────┘   │        └──────────────┘
                   │
                   ▼        ┌──────────────┐
              ┌────────┐    │ Notification │
              │ EVENT  │───►│   Service    │
              │  BUS   │    └──────────────┘
              └────────┘
```

## Event Sourcing

### Concept

Instead of storing current state, store the sequence of events that led to current state.

**Traditional (state-based):**
```sql
UPDATE products SET status = 'AUTOCALLED', 
       autocall_date = '2024-03-15' 
WHERE isin = 'DE000TB12345'
```

**Event-sourced:**
```sql
INSERT INTO events (isin, event_type, timestamp, data)
VALUES ('DE000TB12345', 'AUTOCALLED', '2024-03-15', 
        '{"triggerLevel": 16500, "observedLevel": 16800}')
```

### Benefits of Event Sourcing

| Benefit | Description |
|---------|-------------|
| **Audit trail** | Complete history of what happened |
| **Time travel** | Reconstruct state at any point |
| **Debugging** | Replay events to find bugs |
| **Analytics** | Rich historical data |

### Reconstructing State

```python
def get_product_state(isin, as_of_date=None):
    events = load_events(isin, up_to=as_of_date)
    state = ProductState()
    
    for event in events:
        state = apply_event(state, event)
    
    return state

def apply_event(state, event):
    if event.type == 'PRODUCT_CREATED':
        return ProductState(status='ACTIVE', **event.data)
    elif event.type == 'BARRIER_BREACHED':
        state.barrier_breached = True
        state.breach_date = event.timestamp
    elif event.type == 'AUTOCALLED':
        state.status = 'AUTOCALLED'
        state.termination_date = event.timestamp
    # ... more events
    return state
```

## State Machines

### Product Lifecycle State Machine

```
                    ┌─────────────────────────────────┐
                    │                                 │
                    ▼                                 │
┌───────┐    ┌──────────┐    ┌──────────────┐       │
│CREATED│───►│  ACTIVE  │───►│  TERMINATED  │       │
└───────┘    └────┬─────┘    └──────────────┘       │
                  │                  ▲               │
                  │                  │               │
                  ├──────────────────┼───────────────┘
                  │                  │
                  │    ┌──────────┐  │
                  └───►│AUTOCALLED│──┘
                       └──────────┘
```

### State Transition Rules

```python
VALID_TRANSITIONS = {
    'CREATED': ['ACTIVE'],
    'ACTIVE': ['AUTOCALLED', 'MATURED', 'KNOCKED_OUT'],
    'AUTOCALLED': ['SETTLED'],
    'MATURED': ['SETTLED'],
    'KNOCKED_OUT': ['SETTLED'],
    'SETTLED': []  # Terminal state
}

def transition(current_state, new_state):
    if new_state not in VALID_TRANSITIONS[current_state]:
        raise InvalidTransitionError(current_state, new_state)
    return new_state
```

## Message Queues and Streaming

### Architecture with Kafka

```
┌─────────────────────────────────────────────────────────┐
│                        KAFKA                             │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Topic: market-data     Topic: lifecycle    Topic: alerts│
│  ┌────────────────┐     ┌────────────────┐  ┌──────────┐│
│  │  partition 0   │     │  partition 0   │  │partition │││
│  │  partition 1   │     │  partition 1   │  │   0      │││
│  │  partition 2   │     │  partition 2   │  └──────────┘│
│  └────────────────┘     └────────────────┘               │
└─────────────────────────────────────────────────────────┘
        │                        │                  │
        ▼                        ▼                  ▼
┌──────────────┐         ┌──────────────┐   ┌──────────────┐
│   Pricing    │         │   Lifecycle  │   │ Notification │
│   Service    │         │   Processor  │   │   Service    │
└──────────────┘         └──────────────┘   └──────────────┘
```

### Topic Design

| Topic | Content | Partitioning |
|-------|---------|--------------|
| `market-data` | Price ticks | By underlying |
| `lifecycle-events` | Product events | By ISIN |
| `settlement` | Settlement instructions | By currency |
| `alerts` | Operational alerts | By severity |

## Real-Time Barrier Monitoring

### High-Performance Design

```
                     Market Data
                          │
                          ▼
                  ┌───────────────┐
                  │   Filtering   │ (only relevant ticks)
                  └───────┬───────┘
                          │
                          ▼
                  ┌───────────────┐
                  │  In-Memory    │ (barrier levels)
                  │    Cache      │
                  └───────┬───────┘
                          │
                          ▼
                  ┌───────────────┐
                  │   Compare     │ (tick < barrier?)
                  └───────┬───────┘
                          │
            ┌─────────────┴─────────────┐
            │                           │
            ▼                           ▼
        No breach                   BREACH!
       (continue)                (emit event)
```

### Performance Considerations

| Requirement | Target | Technique |
|-------------|--------|-----------|
| Latency | < 10ms | In-memory processing |
| Throughput | 100k ticks/sec | Parallel processing |
| Reliability | No missed breaches | Redundancy |

## CQRS Pattern

**Command Query Responsibility Segregation**: Separate read and write models.

### Write Side (Commands)

Handles state changes:
- CreateProduct
- RecordBarrierBreach
- ProcessAutocall

### Read Side (Queries)

Optimized views for reading:
- CurrentProductState
- ProductsByUnderlying
- UpcomingObservations

```
┌─────────────────┐         ┌─────────────────┐
│    Command      │         │     Query       │
│    Handler      │         │     Handler     │
└────────┬────────┘         └────────┬────────┘
         │                           │
         ▼                           ▼
┌─────────────────┐         ┌─────────────────┐
│   Event Store   │────────►│   Read Model    │
│   (append-only) │ project │   (optimized)   │
└─────────────────┘         └─────────────────┘
```

## Saga Pattern for Complex Workflows

### Autocall Settlement Saga

```
AutocallDetected
      │
      ▼
┌──────────────┐    failure   ┌──────────────┐
│  Calculate   │─────────────►│   Rollback   │
│   Payout     │              │   Changes    │
└──────┬───────┘              └──────────────┘
       │ success
       ▼
┌──────────────┐
│   Create     │
│ Settlement   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Send      │
│   Payment    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Notify     │
│   Client     │
└──────────────┘
```

## Why Software Engineers Should Understand This

> **💡 Key Insight:** EDA skills are essential for:

1. **System Design**
   - Choosing right patterns
   - Scalability planning
   - Failure handling

2. **Implementation**
   - Message broker integration
   - Event schema design
   - Idempotency handling

3. **Operations**
   - Event replay
   - Debugging
   - Performance tuning

4. **Evolution**
   - Adding new features
   - Schema evolution
   - System migration

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Event ordering | Use partitioning by key |
| Duplicate processing | Implement idempotency |
| Lost events | Use persistent message queues |
| Schema changes | Version events, use evolution |
| Debugging difficulty | Implement event tracing |

## Glossary

- **Event**: Immutable record of something that happened
- **Event Sourcing**: Storing events instead of current state
- **State Machine**: Model with defined states and transitions
- **Message Queue**: Asynchronous event delivery system
- **CQRS**: Separating read and write responsibilities
- **Saga**: Distributed transaction pattern
- **Idempotency**: Same operation produces same result
- **Projection**: Building read model from events

