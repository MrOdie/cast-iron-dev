import Image from "next/image";
import logo_svg from "../../../../public/logo.svg";
import styles from "../styles/modules/logo.module.scss";

export interface LogoProps {
    logoClass: string;
}

const Logo = ({logoClass}: LogoProps) => {
    return (
        <Image className={`${logoClass} ${styles.logo}`} src={logo_svg} alt={'Cast Iron Developer'}/>
    );
}

export default Logo;