export class Character {
    name: string;
    color: string;
    active?: boolean;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }
}
