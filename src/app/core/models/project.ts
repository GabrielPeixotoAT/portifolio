export class Project {
    name: string;
    description: string;
    tags: Array<string>;

    constructor(name: string, description: string, tags: Array<string>) {
        this.name = name;
        this.description = description;
        this.tags = tags;
    }
}
