import { Event } from './event.model';

export interface Progress {
    username: string;
    storyId: string;
    currentEvent?: string;
    parameters?: {[name: string]: any};
    selectedPath?: Event[];
    completedStories?: string[];
}
