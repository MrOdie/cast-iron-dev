import styles from "@/app/assets/styles/modules/projectlayout.module.scss";

const ProjectLayout = ({children,}: { children: React.ReactNode }) => {
    return (
        <main className={styles.main}>{children}</main>
    )
}

export default ProjectLayout;