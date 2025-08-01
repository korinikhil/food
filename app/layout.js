import Navbar from '@/Components/Layout/Nav'
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html>
      <body className='bg-[#2C2C2C]'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}