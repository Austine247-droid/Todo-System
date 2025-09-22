export interface NavLinkChild {
  name: string
  path: string
  icon: React.ElementType
}

export interface NavLink {
  name: string
  path: string
  icon: React.ElementType
  others?: NavLinkChild[] // optional children
}

export interface Assignee {
  name: string
  src: string
}

export interface Priority {
  icon: string
  status: string
}

export interface TableRow {
  id?: number
  name: string
  date: string
  assignee: Assignee[]
  priority: Priority[]
}

export interface Assignee {
  name: string
  src: string
}

export interface Priority {
  icon: string
  status: string
}

export interface TaskProp {
  name: string
  date: string
  assignee: Assignee[]
  priority?: Priority[]
}
