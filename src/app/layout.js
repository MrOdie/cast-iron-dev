import sassy from "./layout.module.scss";
import "../sass/index.scss";

export const metadata = {
  title: 'React Playground',
  description: 'Knocking the rust off of my front end experience.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sassy.body}>{children}</body>
    </html>
  )
}
