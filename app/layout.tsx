import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brightwood Elementary School",
  description:
    "Nurturing young minds, building bright futures. A vibrant school community where every student thrives through innovative learning.",
  keywords: "elementary school, education, students, learning, community, events, achievements",
  authors: [{ name: "Brightwood Elementary School" }],
  openGraph: {
    title: "Brightwood Elementary School",
    description: "Nurturing young minds, building bright futures.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
