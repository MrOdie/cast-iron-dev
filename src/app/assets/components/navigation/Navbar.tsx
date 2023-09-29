"use client"

import styles from "@/app/assets/styles/modules/nav.module.scss";
import {Fragment, useEffect, useState} from "react";
import {Nav} from "@/app/assets/types/navigation/nav";
import NavigationList from "@/app/assets/types/navigation/navigationList";
import {usePathname} from "next/navigation";
import DesktopNav from "@/app/assets/components/navigation/DesktopNav";
import MobileNav from "@/app/assets/components/navigation/MobileNav";

const nav: Nav[] = NavigationList;

const Navbar = () => {
    const currentPathname: string = usePathname();
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(currentPathname);

    }, [currentPathname]);

    return (
        <Fragment>
            <header className={styles.section}>
                <div className={`${styles.mobile} hidden-mobile`}>
                    <DesktopNav navItems={nav} path={pathName}/>
                </div>
                <div className={`${styles.desktop} hidden-desktop`}>
                    <MobileNav navItems={nav} path={pathName}/>
                </div>
            </header>
        </Fragment>
    )
}

export default Navbar;