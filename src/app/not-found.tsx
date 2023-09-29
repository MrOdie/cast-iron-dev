import Link from 'next/link'
import styles from "@/app/assets/styles/modules/notFound.module.scss";

export default function NotFound() {
    return (
        <section className={styles.notFound}>
            <article className={styles.article}>
                <h2 className="margin-top-0">These aren&#39;t the droids you&#39;re looking for.</h2>
                <h2 className="margin-top-0">Move along.</h2>
                <Link href="/">Return Home</Link>
            </article>
        </section>
    )
}