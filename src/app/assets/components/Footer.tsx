import styles from "@/app/assets/styles/modules/footer.module.scss";
import Logo from "@/app/assets/components/Logo";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__section}>
                <Logo logoClass={styles.footer__section__logo}></Logo>
                <p className="h4 margin-bottom-0">
                    <a className="text-white text-no-underline" href="https://github.com/mrodie">Cast Iron Developer</a>
                </p>
            </section>
        </footer>
    )
}

export default Footer;