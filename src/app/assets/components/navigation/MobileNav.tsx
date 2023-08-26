import { FunctionComponent, useState} from "react";
import {NavItem} from "@/app/assets/types/navItem";
import styles from "@/app/assets/styles/modules/mobileNav.module.scss";
import Link from "next/link";

interface Props {
    navItems: NavItem[],
    path: string
}

const MobileNav: FunctionComponent<Props> = ({navItems, path}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.nav}>
            <input
                type="checkbox"
                title="menu"
                id="hamburger"
                className={styles.hamburger_btn}
                onClick={() => setIsOpen(!isOpen)}
            />
            <label htmlFor="hamburger" className={styles.hamburger_icon}>
                <p className="hidden">Menu Button</p>
                <span className={styles.hamburger_icon_line}></span>
            </label>

            {
                isOpen && (
                    <div>
                        <ul className={styles.nav_links}>
                            {
                                navItems.map((item) => {
                                    const isCurrent = path === item.href;
                                    return (
                                        <li className={styles.nav_link} key={item.id}>
                                            <Link className={isCurrent ? `${styles.nav_item_link} ${styles.nav_current}` : styles.nav_item_link} href={item.href}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default MobileNav;