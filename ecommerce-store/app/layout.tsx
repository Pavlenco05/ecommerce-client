import { Urbanist } from 'next/font/google'

import Footer from '@/components/Footer' // Change to uppercase 'Footer'

import Navbar from '@/components/Navbar' // This line is correct
import './globals.css'
const font = Urbanist({ subsets: ['latin'] })
export const metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
      <Footer />
      </body> 
    </html>
  )
}
