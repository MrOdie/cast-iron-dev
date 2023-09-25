import {FunctionComponent, useState} from "react";
import {Nav} from "@/app/assets/types/navigation/nav";
import styles from "@/app/assets/styles/modules/mobileNav.module.scss";
import Link from "next/link";
import Logo from "@/app/assets/components/Logo";

interface Props {
    navItems: Nav[],
    path: string
}

const MobileNav: FunctionComponent<Props> = ({navItems, path}) => {

    const [isChecked, setIsChecked] = useState(false);
    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
                <Link href={"/"}>
                    <Logo logoClass={styles.logo__image}/>
                </Link>
            </div>
            <div className={styles.nav__inner}>
                <input
                    type="checkbox"
                    title="menu"
                    id="hamburger"
                    className={styles.hamburger__btn}
                    onClick={() => {
                        setIsChecked(!isChecked)
                    }}
                />
                <label htmlFor="hamburger" className={`${styles.hamburger__icon} hidden-desktop`}>
                    <p className="hidden">Menu Button</p>
                    <span className={`${styles.hamburger__icon__line} hidden-desktop`}></span>
                </label>

                <div className={!isChecked ? `${styles.nav__links}` : `${styles.nav__links} ${styles.nav__checked}`}>

                    <ul className={styles.nav__links__list}>
                        {
                            navItems.map((item) => {
                                const isCurrent = path === item.href;
                                return (
                                    <li className={styles.nav__links__list__link} key={item.id}>
                                        <Link
                                            className={
                                                isCurrent ?
                                                    `${styles.nav__links__list__link__item} ${styles.nav__links__list__link__current}` :
                                                    `${styles.nav__links__list__link__item}`}
                                            href={item.href}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default MobileNav;