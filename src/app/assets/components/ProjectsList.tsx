import {Project} from "@/app/assets/types/projects/project";
import ProjectList from "@/app/assets/types/projects/projectList";
import Image from "next/image";
import style from "@/app/assets/styles/modules/projectList.module.scss";
import {Fragment} from "react";

const projects: Project[] = ProjectList;

const ProjectsList = () => {
    return (
        <Fragment>
            {projects.map(project => {
                return (
                    <article className={style.article}>
                        <p className="h3 margin-top-0">{project.name} Name Placeholder</p>
                        <Image className={style.image} src={project.image} alt={`${project.name}-${project.link}`}
                               width={320}
                               height={213.5} priority/>
                        <a type="button" className={style.repoButton} href={project.link}>View Repository</a>
                    </article>
                )
            })}
        </Fragment>
    );
}

export default ProjectsList;