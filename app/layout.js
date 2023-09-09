import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Navbar />
      <main className="">
        {/* <div className="flex justify-center items-center min-h-screen"> */}
        <div className="container mx-auto px-6">
          <div className=''>{children}</div>
        </div>
      </main>
      <Footer />
      <Analytics />
    </body>
  </html>
  )
}
