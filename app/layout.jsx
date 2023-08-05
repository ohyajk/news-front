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
        <main className='flex flex-col items-center'>
          <div className="text-news-black w-full max-w-7xl px-4 md:px-8 box-content bg-news-red/5">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
