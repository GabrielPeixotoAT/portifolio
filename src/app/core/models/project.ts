export class Project {
    name: string;
    description: string;
    tags: Array<string>;
    imageUrl: string;
    classes: string;

    constructor(name: string, description: string, tags: Array<string>, imageUrl: string, classes: string) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.classes = classes;
    }
}
