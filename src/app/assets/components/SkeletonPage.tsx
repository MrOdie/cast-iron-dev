import styles from "@/app/assets/styles/modules/skeletonpage.module.scss";

const SkeletonPage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <article className={styles.article}>
                    <h2 className="h3">Loading...</h2>
                </article>
            </section>
        </main>
    )
}

export default SkeletonPage;