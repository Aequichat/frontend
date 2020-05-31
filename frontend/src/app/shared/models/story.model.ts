import { Character } from './character.model';
import { Event } from './event.model';

export class Story {
    id?: string;
    name: string;
    chatName: string;
    icon: string;
    characters: {[name: string]: Character};
    events: {[name: string]: Event};
    pending: boolean;

    constructor(id: string, name: string, icon: string) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}
