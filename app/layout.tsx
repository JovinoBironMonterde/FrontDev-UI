import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mainContainer">
          <div className="flex">
            <div className="sidebarContainer ">
            <Sidebar />
            </div>
            <div className="main-content-container block">
            <Topbar />
            <div className="p-4">
             {children}
             </div>
            </div>
          </div>
        </div>
        
        </body>
    </html>
  )
}
