import ProjectsList from "@/app/assets/components/ProjectsList";
import style from "@/app/assets/styles/modules/projectPage.module.scss";

const ProjectsPage = () => {
    return (
        <section className={style.projectsPage}>
            <ProjectsList/>
        </section>
    )
}

export default ProjectsPage;