"use client"

import styles from "@/app/assets/styles/modules/nav.module.scss";
import {Fragment, useEffect, useState} from "react";
import {NavItem} from "@/app/assets/types/navItem";
import Navigation from "@/app/assets/typescriptObjects/navigationItems";
import {usePathname} from "next/navigation";
import DesktopNav from "@/app/assets/components/navigation/DesktopNav";
import MobileNav from "@/app/assets/components/navigation/MobileNav";
import useWindowDimensions from "@/app/assets/utils/useWindowDimensions";

const nav: NavItem[] = Navigation;

const Navbar = () => {
    const { width } = useWindowDimensions();
    const [startingWidth, setStartingWidth] = useState<number>();
    const currentPathname: string = usePathname();
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(currentPathname);

        setStartingWidth(window.innerWidth);

        if (startingWidth !== width) {
            setStartingWidth(width as number);
        }
    });

    return (
        <Fragment>
            <section className={styles.section}>
                { width && width >= 769 ? <DesktopNav navItems={nav} path={pathName} /> : null}
                { width && width <= 768 ? <MobileNav navItems={nav} path={pathName} /> : null}
            </section>
        </Fragment>
    )
}

export default Navbar;