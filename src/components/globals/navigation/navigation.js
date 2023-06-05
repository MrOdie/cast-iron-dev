import Link from "next/link";
import sassy from "./navigation.module.scss";

const Navbar = () => {
    return (
        <section className={sassy.navbar}>
            <nav className={sassy.nav}>
                <Link href="/">Home</Link>
                <Link href="/todo">Todo</Link>
                <Link href="/weather">Weather App</Link>
            </nav>
        </section>
    )
}

export default Navbar;