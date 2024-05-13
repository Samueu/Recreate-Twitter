import './global.css'
import { Inter } from 'next/font/google'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Twitter",
  description: "vai tomar no cu bolsonaro e lula tb",
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en" className='inter.className'>
      <body>
        {children}
      </body>
    </html>
  )
}