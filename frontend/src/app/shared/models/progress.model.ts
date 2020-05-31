export interface Progress {
    userId: string;
    storyId: string;
    currentEvent?: string;
    parameters?: {[name: string]: any};
    completedStories?: string[];
}
