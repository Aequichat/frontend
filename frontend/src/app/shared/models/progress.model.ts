export interface Progress {
    _id: string;
    userId: string;
    currentStory: string;
    currentEvent: string;
    parameters: {[name: string]: any};
    completedStories: string[];
}
