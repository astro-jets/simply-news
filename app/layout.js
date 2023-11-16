import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Corporate News Africa',
  description: 'Generated by Mphatso',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="dark:bg-[#111]">
          <Navbar/>
          {children}
          <Footer/>
        </div>  
      </body>
    </html>
  )
}
