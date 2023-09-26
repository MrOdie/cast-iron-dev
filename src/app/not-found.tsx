import Link from 'next/link'
import styles from "@/app/assets/styles/modules/notFound.module.scss";

export default function NotFound() {
    return (
        <section className={styles.notFound}>
            <article className={styles.article}>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">Return Home</Link>
            </article>
        </section>
    )
}