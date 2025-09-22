import { tableData } from '@/constants'
import {
  Avatar,
  AvatarGroup,
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Pagination,
  Text,
} from '@chakra-ui/react'

import { Table } from '@chakra-ui/react'
import { ArrowDown2 } from 'iconsax-reactjs'
import Image from 'next/image'

import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { MdKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

export default function CustomTable() {
  return (
    <Flex overflowY="auto" p={4} maxH="70vh" flexDirection="column" mt="10px" minW="1200px">
      <Table.Root variant="outline" borderRadius="10px" py="30px">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader
              borderRight="1px solid #E2E8F0"
              color="#1A1C1E"
              fontSize="14px"
              fontWeight="bold"
            >
              Name
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderRight="1px solid #E2E8F0"
              color="#1A1C1E"
              fontSize="sm"
              fontWeight="bold"
            >
              Date
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderRight="1px solid #E2E8F0"
              color="#1A1C1E"
              fontSize="sm"
              fontWeight="bold"
            >
              Assignee
            </Table.ColumnHeader>
            <Table.ColumnHeader
              borderRight="1px solid #E2E8F0"
              color="#1A1C1E"
              fontSize="sm"
              fontWeight="bold"
            >
              Priority
            </Table.ColumnHeader>
            <Table.ColumnHeader />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {tableData.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>
                <Flex align="center">
                  <AvatarGroup gap="0" spaceX="-2" size="md">
                    {item.assignee?.map((user, idx) => (
                      <Avatar.Root key={idx}>
                        <Avatar.Fallback>{user.name}</Avatar.Fallback>
                        <Avatar.Image src={user.src} alt={user.name} />
                      </Avatar.Root>
                    ))}
                    {item.id ? (
                      <Avatar.Root bg="#F6ECFF">
                        <Avatar.Fallback>+1</Avatar.Fallback>
                      </Avatar.Root>
                    ) : null}
                  </AvatarGroup>
                </Flex>
              </Table.Cell>

              <Table.Cell>
                <Flex align="center" gap={2}>
                  {item.priority.map((priority, idx) => (
                    <Flex align="center" gap="8px" key={idx}>
                      <Image src={priority.icon} alt={priority.status} width={16} height={16} />
                      <Box>{priority.status}</Box>
                    </Flex>
                  ))}
                </Flex>
              </Table.Cell>

              <Table.Cell>
                <Text bg="#F7F7F7" w="fit" px="13px" py="10px">
                  ...
                </Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* Pagination */}
      <Flex justify="space-between" align="center" px="20px">
        <Flex bg="#F7F7F7" w="435px" borderRadius="20px" mt="20px" px="10px" py="5px">
          <Pagination.Root count={tableData.length * 100} pageSize={10} page={1}>
            <ButtonGroup variant="ghost" size="sm" wrap="wrap">
              <Pagination.PrevTrigger asChild>
                <IconButton>
                  <MdKeyboardDoubleArrowLeft />
                  <LuChevronLeft />
                </IconButton>
              </Pagination.PrevTrigger>

              <Pagination.Items
                render={page => (
                  <IconButton
                    key={page.value}
                    color={page.value === 1 ? '#fff' : '#75C5C1'}
                    variant={{ base: 'ghost', _selected: 'outline' }}
                    borderRadius="full"
                    border="1px solid #75C5C1"
                    bg={page.value === 1 ? '#75C5C1' : ''}
                  >
                    {page.value}
                  </IconButton>
                )}
              />

              <Pagination.NextTrigger asChild>
                <IconButton>
                  <LuChevronRight color="#1A1C1E" />
                  <MdOutlineKeyboardDoubleArrowRight color="#1A1C1E" />
                </IconButton>
              </Pagination.NextTrigger>
            </ButtonGroup>
          </Pagination.Root>
        </Flex>

        <Flex justifyContent="center" alignItems="center" mt="20px" gap="4px">
          <Text whiteSpace="nowrap" color="#1A1C1E" fontSize="16px" fontWeight="extrabold">
            Rows Per page:
          </Text>
          <Box
            display="flex"
            borderRadius="full"
            border="1px solid #75C5C1"
            px="20px"
            py="10px"
            alignItems="center"
            justifyContent="center"
            gap="13px"
          >
            <Text>10</Text>
            <ArrowDown2 size="16" color="#1A1C1E" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
