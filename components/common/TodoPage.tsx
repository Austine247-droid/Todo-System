import { taskData } from '@/constants'
import { Box, Flex, Text, Avatar, IconButton, Icon, AvatarGroup } from '@chakra-ui/react'
import { Add, Calendar } from 'iconsax-reactjs'
import Image from 'next/image'
import { BsPerson, BsPlus } from 'react-icons/bs'

interface TaskColumnProp {
  title: string
}

const TaskColumn = ({ title }: TaskColumnProp) => (
  <Box flex="1" borderWidth="1px" borderRadius="lg" bg="gray.50">
    <Flex
      align="center"
      justify="space-between"
      p={2}
      borderRadius="10px"
      bg={
        title === 'To Do'
          ? '#F9F3FF'
          : title === 'In Progress'
          ? '#FBF4E4'
          : title === 'Complete'
          ? '#E9F5F7'
          : 'gray.200'
      }
      mt="10px"
    >
      <Flex align="center" gap={10} justify="space-between">
        <Box as="div" p={1} display="flex" alignItems="center" borderRadius={2}>
          {/* <TaskSquare size={24} color="#d9e3f0" variant="Bulk" /> */}
          <Box as="div" display="flex" alignItems="center">
            {title === 'To Do' ? (
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
                    fill="#CFB7E8"
                  />
                </svg>
              </Icon>
            ) : title === 'In Progress' ? (
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
                    fill="#F6BE38"
                  />
                  <path
                    d="M22.4799 9.6C21.3599 4.68 17.0499 1.25 11.9999 1.25C6.94993 1.25 2.63993 4.68 1.51993 9.6C1.39993 10.12 1.51993 10.65 1.85993 11.07C2.19993 11.49 2.69993 11.73 3.23993 11.73H20.7699C21.3099 11.73 21.8099 11.49 22.1499 11.07C22.4799 10.65 22.5999 10.11 22.4799 9.6Z"
                    fill="#F6BE38"
                  />
                  <path
                    d="M20.06 14.27L15 14.26C14.53 14.26 14.09 14.44 13.76 14.77C13.43 15.1 13.25 15.54 13.25 16.01L13.26 20.49C13.26 21.06 13.54 21.6 14.01 21.93C14.31 22.14 14.66 22.25 15.01 22.25C15.2 22.25 15.39 22.22 15.57 22.15C18.19 21.23 20.41 19.26 21.64 16.77C21.9 16.24 21.87 15.62 21.56 15.12C21.23 14.58 20.67 14.27 20.06 14.27Z"
                    fill="#F6BE38"
                  />
                </svg>
              </Icon>
            ) : title === 'Complete' ? (
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
                    fill="#75C5C1"
                  />
                </svg>
              </Icon>
            ) : (
              ''
            )}
            <Box color="black" ml="10px">
              {title === 'To Do'
                ? 'To Do'
                : title === 'In Progress'
                ? 'In Progress'
                : title === 'Complete'
                ? 'Complete'
                : ''}
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="xs"
            fontWeight="bold"
            bg="#ffff"
            color="#464B50"
          >
            {title === 'To Do'
              ? '(3)'
              : title === 'In Progress'
              ? '(2)'
              : title === 'Complete'
              ? '(1)'
              : ''}
          </Box>
        </Box>

        <Box>
          <IconButton bg="#fff">
            <Add size="20" color="#292D32" />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
    <Box p={4} overflowY="auto" maxH="60vh">
      {taskData.map((task, index) => (
        <Box key={index} p={4} mt={4} borderWidth="1px" borderRadius="md" bg="white" boxShadow="sm">
          {/* Task Card Content */}
          <Flex align="center" justify="space-between" mb={2}>
            <Text fontWeight="semibold" fontSize="sm">
              {task.name}
            </Text>
          </Flex>
          <Flex align="center" gap={2} mb={2}>
            <Calendar size="16" color="#BAC1CC" />
            <Text fontSize="xs" color="gray.600">
              {task.date}
            </Text>
          </Flex>
          <Flex align="center" gap={2} mb={2}>
            <BsPerson color="gray" />
            <Flex>
              <AvatarGroup gap="0" spaceX="-2" size="sm">
                {task.assignee?.map((user, idx) => (
                  <Avatar.Root key={idx}>
                    <Avatar.Fallback>{user.name}</Avatar.Fallback>
                    <Avatar.Image src={user.src} alt={user.name} />
                  </Avatar.Root>
                ))}
                <Avatar.Root bg="#F6ECFF">
                  <Avatar.Fallback>+1</Avatar.Fallback>
                </Avatar.Root>
              </AvatarGroup>
            </Flex>
          </Flex>
          <Flex align="center" gap={2} mb={2}>
            {task.priority?.map((priority, idx) => (
              <Flex align="center" gap="8px" key={idx}>
                <Image src={priority.icon} alt={priority.status} width={16} height={16} />
                <Box>{priority.status}</Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      ))}
      <Flex
        mt={4}
        align="center"
        justify="start"
        bg="white"
        boxShadow="10px"
        borderColor="gray.300"
        borderRadius="md"
        p={4}
        cursor="pointer"
        _hover={{ bg: 'gray.50' }}
      >
        <BsPlus />
        <Text ml={2} fontSize="sm">
          Add Task
        </Text>
      </Flex>
    </Box>
  </Box>
)

export default function TaskBoard() {
  return (
    <Box p={8}>
      <Flex gap={6}>
        <TaskColumn title="To Do" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Complete" />
      </Flex>
    </Box>
  )
}
