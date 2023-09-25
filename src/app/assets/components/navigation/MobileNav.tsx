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

    const [open, setOpen] = useState(false);
    const navChange = (e: any) => {
        if (open) {
            setOpen(!open);
        }
    }
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href={"/"} onClick={e => navChange(e)}>
                    <Logo logoClass={styles.image}/>
                </Link>
            </div>
            <input
                type="checkbox"
                title="menu"
                id="hamburger"
                className={styles.menu}
                checked={open}
                onChange={() => setOpen(!open)}
            />
            <label htmlFor="hamburger" className={styles.label}>
                <p className="hidden">Menu Button</p>
                <span className={styles.lines}></span>
            </label>

            <div className={styles.linksContainer}>

                <ul className={styles.linksList}>
                    {
                        navItems.map((item) => {
                            const isCurrent = path === item.href;
                            return (
                                <li className={styles.link} onClick={e => navChange(e)} key={item.id}>
                                    <Link
                                        className={
                                            !isCurrent ?
                                                `${styles.linkItem}` :
                                                `${styles.linkItemCurrent}`}
                                        href={item.href}>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>

    )
}

export default MobileNav;