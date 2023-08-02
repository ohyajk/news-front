import './globals.css'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
import Breaking from './components/Breaking'

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
        <Breaking />
        {children}
      </body>
    </html>
  )
}
