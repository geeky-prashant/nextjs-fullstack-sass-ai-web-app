import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { CrispProvider } from '@/components/crisp-provider'
import { ModalProvider } from '@/components/modal-provider'
import './globals.css'

export const metadata: Metadata = {
  title: '365SASS',
  description: 'AI Platform for Productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
