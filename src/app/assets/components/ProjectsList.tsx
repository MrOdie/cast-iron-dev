import {Project} from "@/app/assets/types/projects/project";
import ProjectList from "@/app/assets/types/projects/projectList";
import style from "@/app/assets/styles/modules/projectList.module.scss";
import {Fragment} from "react";

const projects: Project[] = ProjectList;

const ProjectsList = () => {

    return (
        <Fragment>
            {projects.map(project => {
                return (
                    <div key={project.id} className={style.project}>
                        <div className={style.projectLeft}>
                            <p className="h3 margin-vert-0">{project.name}</p>
                            <a type="button" className={style.repoButton} href={project.link} target="_blank"><span
                                className="hidden-rs">View </span>Repository</a>
                        </div>
                        <div className={style.projectRight}>
                            <p className={style.description}>{project.description}</p>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    );
}

export default ProjectsList;