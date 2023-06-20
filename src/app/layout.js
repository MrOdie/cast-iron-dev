// import React Componenets
import Navbar from "@/components/globals/navigation/navigation";

// import Styles
import sassy from "./layout.module.scss";
import "../sass/index.scss";

// import font
import "../fonts/typography.css";

export const metadata = {
  title: 'Cast Iron Dev',
  description: 'Knocking the rust off of my front end experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sassy.body}>
        <Navbar></Navbar>
        <main className={sassy.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
