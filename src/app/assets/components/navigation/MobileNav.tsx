import {FunctionComponent, useState} from "react";
import {NavItem} from "@/app/assets/types/navItem";
import styles from "@/app/assets/styles/modules/mobileNav.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../../public/logo.svg";

interface Props {
    navItems: NavItem[],
    path: string
}

const MobileNav: FunctionComponent<Props> = ({navItems, path}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__logo}>
                <Image className={styles.logo__image} src={Logo} alt="Cast Iron Developer"/>
            </div>
            <div className={styles.nav__inner}>
                <input
                    type="checkbox"
                    title="menu"
                    id="hamburger"
                    className={styles.hamburger__btn}
                    onClick={() => setIsOpen(!isOpen)}
                />
                <label htmlFor="hamburger" className={`${styles.hamburger__icon} hidden-desktop`}>
                    <p className="hidden">Menu Button</p>
                    <span className={`${styles.hamburger__icon__line} hidden-desktop`}></span>
                </label>

                {
                    isOpen && (
                        <div>
                            <ul className={styles.nav__links}>
                                {
                                    navItems.map((item) => {
                                        const isCurrent = path === item.href;
                                        return (
                                            <li className={styles.nav__link} key={item.id}>
                                                <Link
                                                    className={isCurrent ? `${styles.nav__item__link} ${styles.nav__current}` : styles.nav__item__link}
                                                    href={item.href}>{item.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </nav>

    )
}

export default MobileNav;