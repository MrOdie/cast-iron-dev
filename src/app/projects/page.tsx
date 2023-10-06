import ProjectsList from "@/app/assets/components/ProjectsList";
import style from "@/app/assets/styles/modules/projectPage.module.scss";

export const metadata = {
    title: 'Projects | Cast Iron Dev',
    description: 'Built by MrOhdee',
}

const ProjectsPage = () => {
    return (
        <section className={style.projectsPage}>
            <article className={style.projectsPageIntro}>
                <h3 className="h1">A Sampling of Projects</h3>
                <p>Throughout my career I have never placed a strong emphasis on making personal projects. More
                    accurately,
                    I have never placed a strong emphasis on seeing projects through to completion. As a husband &amp; a
                    father, I have rarely had time to dedicate to the &#39;next big thing&#39; that is a sure bet to
                    make me
                    the next Zuckerberg or Bezos.</p>
            </article>
            <article className={style.projectList}>
                <ProjectsList/>
            </article>
        </section>
    )
}

export default ProjectsPage;