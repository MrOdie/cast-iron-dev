"use client"

import styles from "@/app/assets/styles/modules/nav.module.scss";
import Link from "next/link";
import {Fragment, useEffect, useState} from "react";
import {NavItem} from "@/app/assets/types/navItem";
import Navigation from "@/app/assets/typescriptObjects/navigationItems";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Logo from "../../../../public/logo.svg";

const nav: NavItem[] = Navigation;

const Navbar = () => {
    const currentPathname: string = usePathname();
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(currentPathname);
    });

    return (
        <Fragment>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Image src={Logo} alt="Cast Iron Developer" />
                    </div>
                    {nav.map((item) => {
                        const isCurrent = pathName === item.href;
                        return (
                            <div className={styles.nav_item} key={item.id}>
                                <Link className={isCurrent ? `${styles.nav_item_link} ${styles.nav_current}` : styles.nav_item_link} href={item.href}>{item.name}</Link>
                            </div>
                        )
                    })}
                </nav>
            </section>
        </Fragment>
    )
}

export default Navbar;