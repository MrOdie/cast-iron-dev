"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import sassy from "./navigation.module.scss";

const Navbar = () => {

    const [offset, setOffset] = useState(0);
    const header = useRef(null);
    const menuBtn = useRef(null);
    let body;

    useEffect(() => {
        body = document.querySelector("body");

        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };

        checkScrollOffset(offset);

    });

    const checkScrollOffset = (num) => {
        num > 10 ? header.current.classList.add('scrolled') : header.current.classList.remove('scrolled');
    };

    const toggleHeader = (e) => {
        console.log("Is checked: " + menuBtn.current.checked);
        !body.classList.contains("no-scroll")
            ? body.classList.add("no-scroll")
            : body.classList.remove("no-scroll");
    };

    const toggleMenuFromNav = (e) => {
        console.log("is checked: " + menuBtn.current.checked);
        if (menuBtn.current.checked) {
            menuBtn.current.checked = false;
        }

        if (body.classList.contains("no-scroll")) {
            body.classList.remove("no-scroll");
        }
    };
    return (
        <header ref={header} className={sassy.mainHeader} data-header>
            <input
                type="checkbox"
                id="menuBtn"
                ref={menuBtn}
                className={sassy.menuBtn}
                onClick={toggleHeader}
            />
            <label htmlFor="menuBtn" className={sassy.menuIcon}>
                <p className="hidden">Menu Button</p>
                <span className={sassy.menuIcon__line}></span>
            </label>
            <nav className={sassy.navLinks}>
                <ul>
                    <li className={sassy.navLink}>
                        <Link onClick={toggleMenuFromNav} href="/">
                            Home
                        </Link>
                    </li>
                    <li className={sassy.navLink}>
                        <Link onClick={toggleMenuFromNav} href="/todo">
                            Todo
                        </Link>
                    </li>
                    <li className={sassy.navLink}>
                        <Link onClick={toggleMenuFromNav} href="/weather">
                            Weather
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;