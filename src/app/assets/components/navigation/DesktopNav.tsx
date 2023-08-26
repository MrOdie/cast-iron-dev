import {NavItem} from "@/app/assets/types/navItem";
import styles from "@/app/assets/styles/modules/desktopNav.module.scss";
import Link from "next/link";
import {FunctionComponent} from "react";

interface Props {
    navItems: NavItem[],
    path: string
}

const DesktopNav: FunctionComponent<Props> = ({navItems, path}) => {
    return (
        <div className={styles.nav}>
            {navItems.map((item) => {
                const isCurrent = path === item.href;
                return (
                    <div className={styles.nav_item} key={item.id}>
                        <Link className={isCurrent ? `${styles.nav_item_link} ${styles.nav_current}` : styles.nav_item_link} href={item.href}>{item.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default DesktopNav;