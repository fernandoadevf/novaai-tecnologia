import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "NovaAI - Automações Inteligentes com IA",
  description:
    "Transforme seu negócio com automações inteligentes powered by AI. Soluções inovadoras para otimizar processos e aumentar produtividade.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/logobaba.png", sizes: "any" },
      { url: "/logobaba.png", sizes: "16x16", type: "image/png" },
      { url: "/logobaba.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logobaba.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logobaba.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/logobaba.png?v=1" type="image/png" />
        <link rel="apple-touch-icon" href="/logobaba.png?v=1" />
        <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </head>
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
