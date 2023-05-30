import sassy from "./navigation.module.scss";

const Navbar = () => {
    return (
        <nav className={sassy.navbar}>
            <section className={sassy.nav}>
                <h3>navbar</h3>
            </section>
        </nav>
    )
}

export default Navbar;