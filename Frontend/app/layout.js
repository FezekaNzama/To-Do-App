
export const metadata = {
  title: 'Notes App',
  description: 'Notes App created with Next JS and SpringBoot Java Framework',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
