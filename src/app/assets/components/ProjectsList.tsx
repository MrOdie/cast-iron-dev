import {Project} from "@/app/assets/types/projects/project";
import ProjectList from "@/app/assets/types/projects/projectList";
import style from "@/app/assets/styles/modules/projectList.module.scss";
import {Fragment} from "react";

// project links

const projects: Project[] = ProjectList;

const ProjectsList = () => {

    return (
        <Fragment>
            {projects.map(project => {
                return (
                    <article key={project.id} className={style.article}>
                        <p className="h3 margin-vert-0">{project.name}</p>
                        <p>{project.description}</p>
                        <a type="button" className={style.repoButton} href={project.link}><span
                            className="hidden-rs">View </span>Repository</a>
                    </article>
                )
            })}
        </Fragment>
    );
}

export default ProjectsList;