import Image from "next/image";
import logo_svg from "../../../../public/logo.svg";

export interface LogoProps {
    logoClass: string;
}

const Logo = ({logoClass}: LogoProps) => {
    return (
        <Image className={logoClass} src={logo_svg} alt={'Cast Iron Developer'}/>
    );
}

export default Logo;