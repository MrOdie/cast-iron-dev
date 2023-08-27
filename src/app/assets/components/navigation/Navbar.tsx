"use client"

import styles from "@/app/assets/styles/modules/nav.module.scss";
import {Fragment, useEffect, useState} from "react";
import {NavItem} from "@/app/assets/types/navItem";
import Navigation from "@/app/assets/typescriptObjects/navigationItems";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Logo from "../../../../../public/logo.svg";
import DesktopNav from "@/app/assets/components/navigation/DesktopNav";
import MobileNav from "@/app/assets/components/navigation/MobileNav";
import useWindowDimensions from "@/app/assets/utils/useWindowDimensions";

const nav: NavItem[] = Navigation;

const Navbar = () => {
    const { width, height } = useWindowDimensions();
    const currentPathname: string = usePathname();
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(currentPathname);
    }, []);

    return (
        <Fragment>
            <section className={styles.section}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Image className={styles.logo_image} src={Logo} alt="Cast Iron Developer" />
                    </div>
                    { width && width >= 769 ? <DesktopNav navItems={nav} path={pathName} /> : null}
                    { width && width <= 768 ? <MobileNav navItems={nav} path={pathName} /> : null}

                </nav>
            </section>
        </Fragment>
    )
}

export default Navbar;