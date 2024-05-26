import type { Metadata, Viewport } from 'next'
import { Inter as FontSans, Roboto, Rubik } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { Toaster } from '@/components/ui/sonner'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

// const fontRoboto = Roboto({
//   subsets: ['latin'], // preload에 사용할 subsets입니다.
//   weight: ['100', '400', '700'],
//   variable: '--roboto'
// })

// const fontRubik = Rubik({
//   subsets: ['latin'],
//   weight: ['300', '400', '600', '700'],
//   variable: '--rubik'
// })

const title = 'New Search Engine'
const description = 'AI-generated search engine for everyone.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.linkedin.com/in/swchoi1994/'),
  title,
  description,
  openGraph: {
    title,
    description
  }
  // twitter: {
  //   title,
  //   description,
  //   card: 'summary_large_image',
  //   creator: '@miiura'
  // }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        {/* <body className={cn('font-roboto antialiased', fontRoboto.variable)}> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Sidebar />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
