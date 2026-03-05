export class Project {
    name: string;
    description: string;
    tags: Array<string>;
    imageUrl: string;
    classes: string;
    url: string;

    constructor(name: string, description: string, tags: Array<string>, imageUrl: string, classes: string, url: string) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.imageUrl = imageUrl;
        this.classes = classes;
        this.url = url;
    }
}
