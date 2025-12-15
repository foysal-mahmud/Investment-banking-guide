import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface TopicMetadata {
    id: string;
    title: string;
    phase: number;
    order: number;
    duration: string;
    difficulty: string;
}

export interface PhaseMetadata {
    phaseNumber: number;
    title: string;
    subtitle: string;
    goal: string;
    color: string;
    duration?: string;
}

export interface TopicContent {
    metadata: TopicMetadata;
    content: string;
    htmlContent: string;
}

export interface PhaseContent {
    metadata: PhaseMetadata;
    content: string;
    htmlContent: string;
    topics: TopicMetadata[];
}

/**
 * Get all phases
 */
export async function getAllPhases(): Promise<PhaseMetadata[]> {
    const phasesDirectory = path.join(contentDirectory, 'phases');
    const phaseDirectories = fs.readdirSync(phasesDirectory).filter((dir) => {
        return fs.statSync(path.join(phasesDirectory, dir)).isDirectory();
    });

    const phases: PhaseMetadata[] = [];

    for (const phaseDir of phaseDirectories) {
        const indexPath = path.join(phasesDirectory, phaseDir, 'index.md');
        if (fs.existsSync(indexPath)) {
            const fileContents = fs.readFileSync(indexPath, 'utf8');
            const { data } = matter(fileContents);
            phases.push(data as PhaseMetadata);
        }
    }

    return phases.sort((a, b) => a.phaseNumber - b.phaseNumber);
}

/**
 * Get phase by number with all topics
 */
export async function getPhaseByNumber(phaseNumber: number): Promise<PhaseContent | null> {
    const phaseDir = path.join(contentDirectory, 'phases', `phase-${phaseNumber}`);
    const indexPath = path.join(phaseDir, 'index.md');

    if (!fs.existsSync(indexPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(indexPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();

    // Get all topics in this phase
    const topics = await getTopicsByPhase(phaseNumber);

    return {
        metadata: data as PhaseMetadata,
        content,
        htmlContent,
        topics,
    };
}

/**
 * Get all topics for a specific phase
 */
export async function getTopicsByPhase(phaseNumber: number): Promise<TopicMetadata[]> {
    const phaseDir = path.join(contentDirectory, 'phases', `phase-${phaseNumber}`);

    if (!fs.existsSync(phaseDir)) {
        return [];
    }

    const files = fs.readdirSync(phaseDir).filter((file) => {
        return file.endsWith('.md') && file !== 'index.md';
    });

    const topics: TopicMetadata[] = [];

    for (const file of files) {
        const filePath = path.join(phaseDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        topics.push(data as TopicMetadata);
    }

    return topics.sort((a, b) => a.order - b.order);
}

/**
 * Get specific topic content
 */
export async function getTopic(phaseNumber: number, topicId: string): Promise<TopicContent | null> {
    const phaseDir = path.join(contentDirectory, 'phases', `phase-${phaseNumber}`);
    const topicPath = path.join(phaseDir, `${topicId}.md`);

    if (!fs.existsSync(topicPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(topicPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const htmlContent = processedContent.toString();

    return {
        metadata: data as TopicMetadata,
        content,
        htmlContent,
    };
}

/**
 * Get all topics across all phases
 */
export async function getAllTopics(): Promise<TopicMetadata[]> {
    const phases = await getAllPhases();
    const allTopics: TopicMetadata[] = [];

    for (const phase of phases) {
        const topics = await getTopicsByPhase(phase.phaseNumber);
        allTopics.push(...topics);
    }

    return allTopics;
}

