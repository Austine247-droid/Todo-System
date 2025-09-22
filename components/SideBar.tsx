'use client'

import { NavLinks } from '@/constants'
import { icons } from '@/constants/icon'
// import { NavLinks } from '@/constants'
// import { icons } from '@/constants/icon'
// import { Collapsible, List, Box, Flex, Text, VStack, HStack, Avatar } from '@chakra-ui/react'
// import { ArrowDown2 } from 'iconsax-reactjs'
// import Image from 'next/image'
// import Link from 'next/link'

// import { NavLinks } from '@/constants'
// import { Box, Flex, List, Text, VStack } from '@chakra-ui/react'
// import Link from 'next/link'
// import { useState } from 'react'

// const SideBar = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   return (

//     <Box gap={4} bg="white" color="black" w={{ base: '100px', lg: '250px' }} h="100vh">
//       <VStack>
//         <Text fontSize="xl" fontWeight="bold">
//           Logo
//         </Text>

//         <List.Root gap="2" variant="plain" align="center">
//           {NavLinks.map((item, index) => (
//             <Link href={item.path} key={index}>
//               <List.Item
//                 bg={selectedIndex === index ? '#E9F5F7' : ''}
//                 onClick={() => setSelectedIndex(index)}
//               >
//                 <Box justifyItems="start">
//                   <Flex alignItems="center" gap="14px">
//                     <List.Indicator asChild color="#7988A9">
//                       <item.icon />
//                     </List.Indicator>
//                     <Text textAlign="start">{item.name}</Text>
//                   </Flex>
//                 </Box>
//               </List.Item>
//             </Link>
//           ))}
//         </List.Root>
//       </VStack>

//       {/* <Box>
//         <Button colorScheme="teal" bg="transparent">
//           <IconButton bg="transparent" color="#d9e3f0">
//             <Category />
//           </IconButton>
//           Home
//         </Button>
//         <Button colorScheme="teal">
//           <IconButton bg="transparent" color="#d9e3f0">
//             <Category />
//           </IconButton>
//           Products
//         </Button>
//         <Button colorScheme="teal">
//           <IconButton bg="transparent" color="#d9e3f0">
//             <Category />
//           </IconButton>
//           Orders
//         </Button>
//         <Button colorScheme="teal">
//           <IconButton bg="transparent" color="#d9e3f0">
//             <Category />
//           </IconButton>
//           Settings
//         </Button>
//       </Box> */}
//     </Box>
//   )
// }

// export default SideBar

// export default function Sidebar() {
//   return (
//     <Flex
//       as="aside"
//       direction="column"
//       justify="space-between" // ⬅️ pushes bottom section down
//       bg="white"
//       color="black"
//       h="100vh" // full height of viewport
//       w="250px"
//       overflowY="auto"
//     >
//       {/* ---------- TOP SECTION ---------- */}
//       <Box as="div" h="100%">
//         {/* Logo */}
//         <HStack mb="4" p="4">
//           <Box as="div" bg="#F7F7F7" py="11px" px="10px" borderRadius="10px" width={46} height={46}>
//             <Image src={icons.image61} alt="image" />
//           </Box>
//         </HStack>

//         {/* Nav */}
//         <VStack align="stretch" px="2">
//           <List.Root gap={2}>
//             {NavLinks.map((item, index) => (
//               <List.Item key={index}>
//                 {item.others ? (
//                   <Collapsible.Root>
//                     {/* Parent link */}
//                     <Collapsible.Trigger asChild>
//                       <Flex
//                         align="center"
//                         justify="space-between"
//                         p="3"
//                         borderRadius="md"
//                         cursor="pointer"
//                         _hover={{ bg: '#E9F5F7' }}
//                       >
//                         <Flex align="center" gap="14px">
//                           <item.icon />
//                           <Text>{item.name}</Text>
//                         </Flex>
//                         <ArrowDown2 size="16" color="#464B50" />
//                       </Flex>
//                     </Collapsible.Trigger>

//                     {/* Nested links */}
//                     <Collapsible.Content>
//                       <VStack align="stretch" pl={6} pt={2} spacing={1}>
//                         {item.others.map((sub, subIndex) => (
//                           <Link href={sub.path} key={subIndex}>
//                             <Flex
//                               align="center"
//                               gap="10px"
//                               p="2"
//                               borderRadius="md"
//                               _hover={{ bg: '#F5FAFC' }}
//                             >
//                               <sub.icon />
//                               <Text>{sub.name}</Text>
//                             </Flex>
//                           </Link>
//                         ))}
//                       </VStack>
//                     </Collapsible.Content>
//                   </Collapsible.Root>
//                 ) : (
//                   // Single link
//                   <Link href={item.path}>
//                     <Flex
//                       align="center"
//                       gap="14px"
//                       p="2"
//                       borderRadius="md"
//                       _hover={{ bg: '#E9F5F7' }}
//                     >
//                       <item.icon />
//                       <Text>{item.name}</Text>
//                     </Flex>
//                   </Link>
//                 )}
//               </List.Item>
//             ))}
//           </List.Root>
//         </VStack>
//       </Box>

//       {/* ---------- BOTTOM SECTION ---------- */}
//       <Box
//         p="4"
//         borderTop="1px solid"
//         borderColor="gray.100"
//         bg="#F7F7F7"
//         boxShadow="md"
//         zIndex="30px"
//         mt="auto"
//         px="2"
//         py="3"
//       >
//         {/* Language Switcher */}
//         <Flex
//           align="center"
//           justify="space-between"
//           bg="#ffff"
//           p="2"
//           borderRadius="md"
//           boxShadow="md"
//           pos="relative"
//         >
//           <Box as="div" display="flex" justifyContent="center" alignItems="center" gap="10px">
//             <Avatar.Root>
//               <Avatar.Fallback name="Paul" />
//               <Avatar.Image src="/icons/paul.png" />
//             </Avatar.Root>
//             <Text as="h3" fontSize="sm" fontWeight="semibold" whiteSpace="nowrap" color="#6C7278">
//               English
//             </Text>
//           </Box>

//           <ArrowDown2 size="16" color="#464B50" />
//         </Flex>

//         {/* You can also add user profile/avatar here */}
//         <Flex align="center" gap="2" mt="4">
//           <Box boxSize="32px" bg="gray.200" borderRadius="full" />
//           <Text fontWeight="semibold">Hi Paul</Text>
//         </Flex>
//       </Box>
//     </Flex>
//   )
// }

import { Flex, Box, Text, VStack, HStack, List, Collapsible, Avatar, Icon } from '@chakra-ui/react'
import { ArrowDown2 } from 'iconsax-reactjs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { LuArrowLeftToLine } from 'react-icons/lu'
export default function Sidebar() {
  const [active, setActive] = useState<{ parent: number | null; child: number | null }>({
    parent: null,
    child: null,
  })
  return (
    <Box
      as="aside"
      bg="white"
      pos="relative"
      color="black"
      h="100vh"
      w="250px"
      overflowY="auto"
      display="flex"
      flexDirection="column"
      gap={20}
      flex="1"
      px="10px"
    >
      {/* ---------- TOP SECTION ---------- */}
      <Box as="div" h="100%" pb="100px">
        <HStack mb="4" p="4" justifyItems="space-between">
          <Box
            as="div"
            bg="#F7F7F7"
            py="11px"
            px="10px"
            borderRadius="10px"
            width="full"
            height="full"
          >
            <Image src={icons.logo} alt="image" />
          </Box>
          <Box
            as="div"
            bg="#F7F7F7"
            display="flex"
            justifyContent="end"
            alignItems="center"
            px="10px"
            py="13px"
          >
            <LuArrowLeftToLine />
          </Box>
        </HStack>
        {/* Nav */}
        <VStack align="stretch" px="2">
          <List.Root gap={2}>
            {NavLinks.map((item, index) => (
              <List.Item key={index} listStyle="none">
                {item.others ? (
                  <Collapsible.Root>
                    <Collapsible.Trigger asChild>
                      <Flex
                        align="center"
                        justify="space-between"
                        p="3"
                        borderRadius="md"
                        cursor="pointer"
                        bg={active.parent === index && active.child === null ? '#E9F5F7' : ''}
                        color={active.parent === index && active.child === null ? '#75C5C1' : ''}
                        _hover={{ bg: '#E9F5F7' }}
                        onClick={() => setActive({ parent: index, child: null })}
                      >
                        <Flex align="center" gap="14px">
                          <item.icon />
                          <Text>{item.name}</Text>
                        </Flex>
                        <ArrowDown2 size="16" color="#464B50" />
                      </Flex>
                    </Collapsible.Trigger>

                    <Collapsible.Content>
                      <VStack align="stretch" pl={6} pt={2} gap={1}>
                        {item.others.map((sub, subIndex) => (
                          <Link href={sub.path} key={subIndex}>
                            <Flex
                              align="center"
                              gap="10px"
                              p="2"
                              borderRadius="md"
                              bg={
                                active.parent === index && active.child === subIndex
                                  ? '#E9F5F7'
                                  : ''
                              }
                              color={
                                active.parent === index && active.child === subIndex
                                  ? '#75C5C1'
                                  : ''
                              }
                              _hover={{ bg: '#F5FAFC' }}
                              onClick={() => setActive({ parent: index, child: subIndex })}
                            >
                              <sub.icon />
                              <Text>{sub.name}</Text>
                            </Flex>
                          </Link>
                        ))}
                      </VStack>
                    </Collapsible.Content>
                  </Collapsible.Root>
                ) : (
                  <Link href={item.path}>
                    <Flex
                      align="center"
                      gap="14px"
                      p="2"
                      borderRadius="md"
                      bg={active.parent === index ? '#E9F5F7' : ''}
                      color={active.parent === index ? '#75C5C1' : ''}
                      _hover={{ bg: '#E9F5F7' }}
                      onClick={() => setActive({ parent: index, child: null })}
                    >
                      <item.icon />
                      <Text>{item.name}</Text>
                    </Flex>
                  </Link>
                )}
              </List.Item>
            ))}
          </List.Root>
        </VStack>
      </Box>

      {/* ---------- FIXED BOTTOM SECTION ---------- */}
      <Box
        pos="relative"
        bottom="0"
        left="0"
        width="190px"
        p="4"
        bg="#F7F7F7"
        borderTop="1px solid"
        borderColor="gray.100"
        boxShadow="md"
        zIndex="1000" // A high z-index to ensure it's on top of everything
        px="2"
        py="3"
        w="full"
      >
        {/* Language Switcher */}
        <Flex
          align="center"
          justify="space-between"
          bg="#ffff"
          p="2"
          borderRadius="md"
          boxShadow="md"
          pos="relative"
        >
          <Box as="div" display="flex" justifyContent="center" alignItems="center" gap="10px">
            <Avatar.Root>
              <Avatar.Fallback name="language" />
              <Avatar.Image src="/icons/language.png" />
            </Avatar.Root>
            <Text as="h3" fontSize="sm" fontWeight="semibold" whiteSpace="nowrap" color="#6C7278">
              English
            </Text>
          </Box>
          <ArrowDown2 size="16" color="#464B50" />
        </Flex>

        {/* User profile */}
        <Flex
          align="center"
          gap="2"
          mt="4"
          bg="#fff"
          borderRadius="10px"
          py="15px"
          px="8px"
          justify="space-between"
        >
          <Text as="h3">Dark mode</Text>
          <Box as="div" display="flex" justifyContent="center" alignItems="center">
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
              >
                <rect width="34" height="20" rx="10" fill="#E1E0E1" />
                <circle cx="10" cy="10" r="8" fill="white" />
              </svg>
            </Icon>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
