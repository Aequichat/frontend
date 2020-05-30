import { Character } from './character.model';

export class Story {
    _id: string;
    name: string;
    icon: string;
    characters: {[name: string]: Character};
    events: any;

    constructor(id: string, name: string, icon: string) {
        this._id = id;
        this.name = name;
        this.icon = icon;
    }
}
