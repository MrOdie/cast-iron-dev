import '@/app/assets/styles/style.scss'

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
      <body>{children}</body>
    </html>
  )
}
