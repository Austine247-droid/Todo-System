// components/Body.tsx
'use client'

import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

export function Layout({ children }: { children: React.ReactNode }) {
  return <body className={`${jakarta.className} antialiased`}>{children}</body>
}
