import Navbar from '@/Components/Layout/Nav'
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="bg-[#2C2C2C] min-h-screen">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}