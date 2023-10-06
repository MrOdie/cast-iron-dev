import '@/app/assets/styles/style.scss'
import Navbar from "@/app/assets/components/navigation/Navbar";
import Footer from "@/app/assets/components/Footer";
import {font} from "./font";
import styles from "@/app/assets/styles/modules/rootLayout.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata = {
    title: 'Home | Cast Iron Dev',
    description: 'Built by MrOhdee',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`margin-none ${font.className}`}>
        <Navbar></Navbar>
        <div className={styles.root__section}>
            {children}
        </div>
        <Footer></Footer>
        </body>
        </html>
    )
}
