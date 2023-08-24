import '@/app/assets/styles/style.scss'
import Navbar from "@/app/assets/components/navbar";
import Footer from "@/app/assets/components/footer";
import {font} from "./font";

export const metadata = {
  title: 'Cast Iron Dev',
  description: 'Built by MrOhdee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`margin-none ${font.className}`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
