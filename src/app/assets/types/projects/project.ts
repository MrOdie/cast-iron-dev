export class Project {
    id: number;
    name: string;
    link: string;
    description: string;


    constructor(id: number, name: string, link: string, description: string) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.description = description;
    }
}