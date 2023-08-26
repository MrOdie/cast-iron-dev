import {Fragment, FunctionComponent, useState} from "react";
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
            <input type="checkbox" title="menu" onClick={() => setIsOpen(!isOpen)}/>

            <p>{isOpen.toString()}</p>
            {
                isOpen && (
                    navItems.map((item) => {
                        const isCurrent = path === item.href;
                        return (
                            <div className={styles.nav_item} key={item.id}>
                                <Link className={isCurrent ? `${styles.nav_item_link} ${styles.nav_current}` : styles.nav_item_link} href={item.href}>{item.name}</Link>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default MobileNav;