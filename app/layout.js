import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'David Reguart Portfolio',
  description: 'This is my new Web Development Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='w-full bg-gradient-to-r from-yellow from-1% to-green to-40% font-[Montserrat]'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
