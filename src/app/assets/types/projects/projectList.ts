import {Project} from "@/app/assets/types/projects/project";

const ProjectList: Project[] = [
    {
        id: 0,
        name: "Simple Java API",
        link: "https://github.com/cast-iron-developer/simple_java_api",
        description: "This is a Simple Java API that runs with a Postgres DB. It is powered by Spring Boot and runs with Maven.",
    },
    {
        id: 1,
        name: "React Todo",
        link: "https://github.com/cast-iron-developer/cast-iron-dev/tree/feature/first-app",
        description: "React Todo App that supports creating & deleting Todos. It is built with NextJs and includes SCSS Modules.",
    },
    {
        id: 2,
        name: "Java Password Generator",
        link: "https://github.com/cast-iron-developer/java-password-genertor",
        description: "A very basic, secure password generator that will create a password with varying degrees of complexity based off of user input.",
    },
    {
        id: 3,
        name: "Tetris",
        link: "https://github.com/cast-iron-developer/tetris",
        description: "A Vanilla JS game of Tetris, using a Canvas element.",
    },
    {
        id: 4,
        name: "Image Portfolio",
        link: "https://github.com/cast-iron-developer/Image-portfolio",
        description: "A simple static landing page for an image portfolio.",
    },
    {
        id: 5,
        name: "Pong",
        link: "https://github.com/cast-iron-developer/Pong",
        description: "A Vanilla JS version of the beloved Video Game."
    },
    {
        id: 6,
        name: "Alabama Tribute Page",
        link: "https://github.com/cast-iron-developer/Alabama-Tribute-Page",
        description: "This is the first Vanilla HTML/CSS site that I ever created.",
    },
];

export default ProjectList;