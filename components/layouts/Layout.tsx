import Navbar from '@/components/NavBar'
import Sidebar from '@/components/SideBar'
import { Flex, Spacer } from '@chakra-ui/react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex flexDirection="row" h="100vh">
      <Sidebar />

      <Spacer />
      <Flex bg="red.200">
        <Navbar />
        <main>{children}</main>
      </Flex>
    </Flex>
  )
}
