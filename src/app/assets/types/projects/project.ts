export class Project {
    id: number;
    name: string;
    link: string;
    description: string;
    age: number;
    image: string;


    constructor(id: number, name: string, link: string, description: string, age: number, image: string) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.description = description;
        this.age = age;
        this.image = image;
    }
}