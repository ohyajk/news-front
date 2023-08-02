import './globals.css'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
export const metadata = {
  title: 'Cover News',
  description: 'Uncover the truth with us...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
