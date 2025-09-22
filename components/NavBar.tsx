'use client'

import { Avatar, Box, Flex, HStack, Input, InputGroup, Text } from '@chakra-ui/react'

import { Link1, Notification, SearchNormal1 } from 'iconsax-reactjs'
import CustomButton from './common/Button'
import Image from 'next/image'
import { icons } from '@/constants/icon'

function Navbar() {
  return (
    <Box bg="white" px="4" py="2" boxShadow="sm" borderBottom="1px solid" borderColor="gray.200">
      <Flex h="16" alignItems="center" width="full" gap="5px">
        {/* Left Section: Search Input */}
        <HStack gap="4">
          <InputGroup
            startElement={<SearchNormal1 size="24" color="#6C7278" />}
            bg="#F7F7F7"
            w="220px"
            borderRadius="10px"
            boxShadow="sm"
          >
            <Input placeholder="M91|" color="#6C7278" fontSize="md" flex="1" />
          </InputGroup>

          {/* Icon Buttons (e.g., app logos) */}
          <HStack gap="2">
            {/* Replace with your actual icons/buttons */}
            <Box
              as="div"
              bg="#F7F7F7"
              py="13px"
              px="13px"
              borderRadius="10px"
              width={46}
              height={46}
            >
              <Image src={icons.image59} alt="image" />
            </Box>

            <Box
              as="div"
              bg="#F7F7F7"
              py="11px"
              px="10px"
              borderRadius="10px"
              width={46}
              height={46}
            >
              <Image src={icons.image61} alt="image" />
            </Box>

            <Box
              as="div"
              bg="#F7F7F7"
              py="11px"
              px="10px"
              borderRadius="10px"
              width={46}
              height={46}
              alignContent="center"
              justifyContent="center"
            >
              <Image src={icons.image62} alt="image" />
            </Box>

            <Box
              as="div"
              bg="#F7F7F7"
              py="11px"
              px="10px"
              borderRadius="10px"
              width={46}
              height={46}
            >
              <Image src={icons.image63} alt="image" />
            </Box>
          </HStack>
        </HStack>

        {/* Right Section: Buttons, Notifications, Avatar */}
        <HStack gap="4" w="100%">
          {/* Action Buttons */}
          <HStack gap="2" justifyContent="center" bg="#F7F7F7" borderRadius="10px" ml="34px">
            <CustomButton
              label="  Meldingreaeken"
              bg="#41245F"
              color="white"
              borderRadius="10px"
              w="120px"
            />
            <CustomButton label="  VIM" bg="#75C5C1" color="white" borderRadius="10px" w="46px" />
            <CustomButton label="   LMS" bg="#75C5C1" color="white" borderRadius="10px" w="46px" />
            <CustomButton label="    BHV" bg="#75C5C1" color="white" borderRadius="10px" w="46px" />
            <CustomButton
              label="  DataLek "
              bg="#75C5C1"
              color="white"
              borderRadius="10px"
              px="10px"
              py="12px"
              w="75px"
            />

            <Box as="div" bg="#F7F7F7" px="8px" py="11px" borderRadius="md">
              <Link1 size="22" color="#292D32" />
            </Box>
          </HStack>

          {/* Notification Icon */}
          <Box as="div" bg="#F7F7F7" p="12px" borderRadius="full">
            <Notification size="22" color="#292D32" />
          </Box>

          {/* Avatar and Name */}
          <HStack as="div" gap="2" cursor="pointer" p="2" borderRadius="full" bg="#F7F7F7">
            <Avatar.Root>
              <Avatar.Fallback name="Paul" />
              <Avatar.Image src="/icons/paul.png" />
            </Avatar.Root>
            <Text fontSize="sm" fontWeight="semibold" whiteSpace="nowrap" color="#1A1C1E">
              Hi Paul
            </Text>
            <Box
              as="div"
              display="flex"
              borderRadius="10px"
              width={14}
              height={14}
              alignItems="center"
              justifyContent="center"
            >
              <Image src={icons.arrowDown} alt="image" />
            </Box>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navbar
