import { NavLink, TableRow, TaskProp } from '@/interfaces'
import {
  Book1,
  Category,
  Clock,
  Edit,
  Folder2,
  MenuBoard,
  MessageEdit,
  Note1,
  NotificationBing,
  People,
  Setting2,
  Stickynote,
  Task,
  TaskSquare,
} from 'iconsax-reactjs'
import { FaPhoneAlt } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'
import { GoPeople } from 'react-icons/go'
import { GrTask } from 'react-icons/gr'
import { LuNewspaper } from 'react-icons/lu'
import { MdOutlinePoll } from 'react-icons/md'

export const NavLinks: NavLink[] = [
  {
    name: 'Home',
    path: '/',
    icon: Category,
  },
  {
    name: 'MKVanBinnen',
    path: '/mkv-van-binnen',
    icon: Stickynote,
  },
  {
    name: 'Document Management',
    path: '/documents',
    icon: Folder2,
  },
  {
    name: 'Patient Information',
    path: '/patients',
    icon: People,
  },
  {
    name: 'Agenda',
    path: '/agenda',
    icon: Note1,
  },
  {
    name: 'My Department',
    path: '/my-department',
    icon: GiNewspaper,
    others: [
      {
        name: 'News',
        path: '/my-department/news',
        icon: LuNewspaper,
      },

      {
        name: 'Members',
        path: '/my-department/members',
        icon: GoPeople,
      },
      {
        name: 'To do',
        path: '/my-department/todo',

        icon: Task,
      },
      {
        name: 'Form Task',
        path: '//my-department/formTask',
        icon: GrTask,
      },
      {
        name: 'Agenda  ',
        path: '/my-department/agenda',
        icon: Note1,
      },
      {
        name: 'Follow up system  ',
        path: '/my-department/follow-up',
        icon: Clock,
      },
    ],
  },
  {
    name: 'Group Settings  ',
    path: '/group-settings',
    icon: Setting2,
    others: [
      {
        name: 'Phone numbers',
        path: '/group-settings/phone-number',
        icon: FaPhoneAlt,
      },
      {
        name: 'My to do Protocols',
        path: '/my-department/protocols',
        icon: TaskSquare,
      },
      {
        name: 'My Notifications',
        path: '/group-settings/notifications',
        icon: NotificationBing,
      },
      {
        name: 'Knowledge Base',
        path: '/group-settings/knownledge-base',
        icon: MenuBoard,
      },
    ],
  },

  {
    name: 'Super Admin',
    path: '/superadmin',
    icon: MessageEdit,
  },
  {
    name: 'Admin',
    path: '/admin',
    icon: Edit,
    others: [
      {
        name: 'Agenda',
        path: '/admin/agenda',
        icon: Note1,
      },
      {
        name: 'News',
        path: '/admin/news',
        icon: LuNewspaper,
      },
      {
        name: 'Poll',
        path: '/admin/poll',
        icon: MdOutlinePoll,
      },
      {
        name: 'Department Rules',
        path: '/admin/department-rules',
        icon: Book1,
      },
      {
        name: 'Follow up system ',
        path: '/admin/follow-up-system',
        icon: Clock,
      },
    ],
  },
]

export const tableData: TableRow[] = [
  {
    id: 1,
    name: 'MKV Intranet V2',
    date: '04/06/2024 - 16/06/2014',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
  {
    id: 2,
    name: 'Design System',
    date: '23/06/2024 - 24/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagYellow.png',
        status: 'Important',
      },
    ],
  },
  {
    name: 'Medical Appointment',
    date: '16/06/2024 - 18/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagRed.png',
        status: 'Urgent',
      },
    ],
  },
  {
    id: 4,
    name: 'MKV Intranet V2',
    date: '04/06/2024 - 16/06/2014',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
  {
    id: 5,
    name: 'Design System',
    date: '23/06/2024 - 24/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagYellow.png',
        status: 'Important',
      },
    ],
  },
  {
    name: 'Medical Appointment',
    date: '16/06/2024 - 18/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagRed.png',
        status: 'Urgent',
      },
    ],
  },
  {
    name: 'Medical Appointment',
    date: '16/06/2024 - 18/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
  {
    id: 8,
    name: 'Design System',
    date: '23/06/2024 - 24/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagYellow.png',
        status: 'Important',
      },
    ],
  },
  {
    name: 'Medical Appointment',
    date: '16/06/2024 - 18/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagRed.png',
        status: 'Urgent',
      },
    ],
  },
  {
    id: 10,
    name: 'MKV Intranet V2',
    date: '04/06/2024 - 16/06/2014',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
]

export const taskData: TaskProp[] = [
  {
    name: 'MKV Intranet V2',
    date: '04/06/2024 - 16/06/2014',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
  {
    name: 'Design System',
    date: '23/06/2024 - 24/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
  {
    name: 'Medical Appointment',
    date: '16/06/2024 - 18/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
  {
    name: 'Testing Data',
    date: '23/06/2024 - 24/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
  },
  {
    name: 'Patient Request',
    date: '16/06/2024 - 18/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
  {
    name: 'Patient Meetup',
    date: '23/06/2024 - 24/06/2024',
    assignee: [
      {
        name: 'Uchiha Sasuke',
        src: '/icons/avatar1.png',
      },
      {
        name: 'Baki Ani',
        src: '/icons/avatar2.png',
      },
    ],
    priority: [
      {
        icon: '/icons/flagGreen.png',
        status: 'Medium',
      },
    ],
  },
]
