'use client'

import CustomButton from '@/components/common/Button'
import { Box, Flex, Heading, Tabs, Icon, Spacer, InputGroup, Input } from '@chakra-ui/react'
import { AddCircle, ExportCurve, RowHorizontal, RowVertical, SearchNormal1 } from 'iconsax-reactjs'
import CustomTable from '@/components/common/Table'

import TaskBoard from '@/components/common/TodoPage'

export default function TodoPage() {
  const Istrue = true
  return (
    <Box p={6} w="100%" h="100%">
      {/* Header */}
      <Flex align="center" justify="space-between" mb={4} gap={4} flexWrap="wrap">
        <Flex align="center" gap={3}>
          <Box as="div" bg="#fffff" p="10px" borderRadius="full">
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M13 23.8334C18.9831 23.8334 23.8333 18.9831 23.8333 13C23.8333 7.01694 18.9831 2.16669 13 2.16669C7.0169 2.16669 2.16666 7.01694 2.16666 13C2.16666 18.9831 7.0169 23.8334 13 23.8334Z"
                  stroke="#464B50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.7917 13H10.2917"
                  stroke="#464B50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4583 9.75L9.20834 13L12.4583 16.25"
                  stroke="#464B50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Icon>
          </Box>
          <Heading fontSize="30px" fontWeight="bold">
            Afdeling Kwaliteit
          </Heading>
        </Flex>

        <Flex align="center" gap={3}>
          <Box as="div" bg="#F7F7F7" py="15px" px="8px" borderRadius="10px">
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
          <Box as="div" bg="#F7F7F7" py="13px" px="13px" borderRadius="10px">
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M3 7H21" stroke="#292D32" strokeLinecap="round" />
                <path d="M6 12H18" stroke="#292D32" strokeLinecap="round" />
                <path d="M10 17H14" stroke="#292D32" strokeLinecap="round" />
              </svg>
            </Icon>
          </Box>
          <Box as="div" bg="#F7F7F7" py="13px" px="13px" borderRadius="10px">
            <Icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 2V5"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V5"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 9.08997H20.5"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6947 13.7H15.7037"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.6947 16.7H15.7037"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 13.7H12.0045"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9955 16.7H12.0055"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 13.7H8.30329"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.29431 16.7H8.30329"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Icon>
          </Box>

          <CustomButton
            label="Export xlsx"
            bg="#41245F"
            leftIcon={<ExportCurve size="24" color="#FFFFFF" />}
            px="20px"
            py="13px"
            color="white"
          />
          <CustomButton
            label="Add Task"
            bg="#75C5C1"
            leftIcon={<AddCircle size="24" color="#FFFFFF" />}
            px="20px"
            py="13px"
            color="white"
          />
        </Flex>
      </Flex>

      {/* Search + View mode toggle */}
      <Flex
        align="center"
        justify="space-between"
        mb={4}
        gap={4}
        bg="#E9F5F7"
        py="10px"
        pl="10px"
        pb="10px"
        pr="10px"
      >
        <InputGroup
          startElement={<SearchNormal1 size="24" color="#6C7278" />}
          bg="white"
          w="300px"
          borderRadius="6px"
        >
          <Input placeholder="Search for To-Do" color="#6C7278" fontSize="md" flex="1" />
        </InputGroup>

        <Flex gap={2} bg="white" p="10px" align="center" borderRadius="6px">
          <Box as="div" bg="#F7F7F7" px="6px" py="4px" borderRadius="4px">
            <RowHorizontal size="20" color="#7988A9" />
          </Box>
          <Box as="div" bg="#75C5C1" px="6px" py="4px" borderRadius="4px">
            <RowVertical size="20" color="white" />
          </Box>
        </Flex>
      </Flex>

      {/* Tabs / Status */}
      <Tabs.Root defaultValue="todo" size="md" variant="subtle">
        <Tabs.List w="100%" gap={4}>
          <Tabs.Trigger
            value="todo"
            justifyContent="space-between"
            color="#CFB7E8"
            _selected={{ bg: '#CFB7E8', color: 'white' }}
            bg="white"
            borderRadius="md"
            boxShadow="sm"
            w="176px"
          >
            <Box p={1} display="flex" alignItems="center" justifyContent="center" borderRadius={2}>
              {/* <TaskSquare size={24} color="#d9e3f0" variant="Bulk" /> */}
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
              <Box as="div" color="black" ml="10px">
                To Do
              </Box>
            </Box>
            <Spacer />
            <Box
              px={2}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="bold"
              bg="#F9F3FF"
              color="#464B50"
            >
              (20)
            </Box>
          </Tabs.Trigger>

          <Tabs.Trigger
            value="inprogress"
            justifyContent="space-between"
            bg="white"
            borderRadius="md"
            color="#F6BE38"
            boxShadow="sm"
            _selected={{ bg: '#F6BE38', fontWeight: 'bold', color: 'white' }}
            w="212px"
          >
            <Box p={1} display="flex" alignItems="center" justifyContent="center" borderRadius={2}>
              {/* <TaskSquare size={24} color="#d9e3f0" variant="Bulk" /> */}
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8.99987 14.22H3.91987C3.30987 14.22 2.74987 14.53 2.42987 15.05C2.10987 15.56 2.07987 16.17 2.33987 16.71C3.56987 19.23 5.78987 21.21 8.42987 22.14C8.60987 22.2 8.80987 22.24 8.99987 22.24C9.34987 22.24 9.69987 22.13 9.99987 21.92C10.4699 21.59 10.7499 21.05 10.7499 20.48L10.7599 15.98C10.7599 15.51 10.5799 15.07 10.2499 14.74C9.90987 14.41 9.46987 14.22 8.99987 14.22Z"
                    fill="currentColor"
                  />
                  <path
                    d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20.06 14.27L15 14.26C14.53 14.26 14.09 14.44 13.76 14.77C13.43 15.1 13.25 15.54 13.25 16.01L13.26 20.49C13.26 21.06 13.54 21.6 14.01 21.93C14.31 22.14 14.66 22.25 15.01 22.25C15.2 22.25 15.39 22.22 15.57 22.15C18.19 21.23 20.41 19.26 21.64 16.77C21.9 16.24 21.87 15.62 21.56 15.12C21.23 14.58 20.67 14.27 20.06 14.27Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
              <Box color="#464B50" ml="10px">
                In Progress
              </Box>
            </Box>
            <Spacer />
            <Box
              px={2}
              py={1}
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              bg="#FBF4E4"
              color="#464B50"
            >
              (23)
            </Box>
          </Tabs.Trigger>

          <Tabs.Trigger
            value="complete"
            justifyContent="space-between"
            bg="white"
            borderRadius="md"
            color="#75C5C1"
            boxShadow="sm"
            _selected={{ bg: '#75C5C1', fontWeight: 'bold', color: 'white' }}
            w="206px"
          >
            <Box p={1} display="flex" alignItems="center" justifyContent="center" borderRadius={2}>
              {/* <TaskSquare size={24} color="#d9e3f0" variant="Bulk" /> */}
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
            </Box>
            <Box color="black"> Complete </Box>
            <Box
              px={2}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="bold"
              bg="#E9F5F7"
              color="#464B50"
            >
              (18)
            </Box>
          </Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      {Istrue ? <CustomTable /> : <TaskBoard />}
    </Box>
  )
}
