// app/layout.tsx (Server Component)
import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'
import { Box, Flex } from '@chakra-ui/react'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

import { Layout } from '@/components/layout/Layout'

export const metadata: Metadata = {
  title: 'To-Do System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Layout>
        <Provider>
          <Flex
            h="100vh"
            direction={{ base: 'column', md: 'row' }} // stack on mobile, row on desktop
            bg="#F7F7F7"
          >
            {/* Sidebar */}
            <Box
              display={{ base: 'none', md: 'flex' }} // hide on mobile
              w={{ base: 'full', md: '250px' }}
              h="full"
              flexShrink={0} // prevent shrinking
              borderRight={{ base: 'none', md: '1px solid #E2E8F0' }}
              bg="white"
            >
              <SideBar />
            </Box>

            {/* Main Content */}
            <Flex direction="column" flex="1" minH="0">
              {/* Navbar */}
              <Box
                position="sticky"
                top={0}
                zIndex={10}
                w="full"
                bg="white"
                borderBottom="1px solid #E2E8F0"
                px={{ base: 4, md: 6 }}
                py={{ base: 2, md: 4 }}
              >
                <NavBar />
              </Box>

              {/* Page Content */}
              <Box
                flex="1"
                p={{ base: 4, md: 6 }}
                bg="white"
                mt={{ base: 2, md: '30px' }}
                mx={{ base: 2, md: '40px', lg: '50px' }}
                borderRadius={{ base: 'md', md: '10px' }}
                overflowY="auto"
                minH="0"
              >
                {children}
              </Box>
            </Flex>
          </Flex>
        </Provider>
      </Layout>
    </html>
  )
}
