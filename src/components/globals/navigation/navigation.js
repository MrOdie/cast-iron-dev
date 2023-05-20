import sassy from "./navigation.module.scss";

const Navbar = () => {
    return (
        <nav className={sassy.navbar}>
            <div>
                <h3>navbar</h3>
            </div>
        </nav>
    )
}

export default Navbar;