export type ListId = string
export type ApiKey = string

export type ClickupV2 = {
  get: {
    tasks: (id: ListId, p?: GetTaskParams, f?: GetTaskReturnFields) => Promise<ClickupTask>
  }
}


//Task

export interface GetTaskParams {
  archived?: boolean
  statuses?: string
  include_closed?: boolean
}

export enum TaskCustomFields {
  name = 'name',
  value = 'value'
}

export interface GetTaskReturnFields {
  fields: TaskReturnNormalFields[],
  custom?: TaskCustomFields[]
}

export interface TaskData {
  tasks: Task[]
  last_page: boolean
}

export interface LabelOption {
  id: string
  label: string
  color: string | null
}

export interface TaskCustomField {
  id: string
  name: string
  type: string
  type_config: {
    options: LabelOption[]
  }
  date_created: string
  required: string
  value: string[] | string
}
export interface Task {
  id: string
  custom_id: string
  name: string
  text_content: string
  description: string
  status: {
    status: string
    color: string
    type: string
    orderindex: string
  }
  orderindex: string
  ate_created: string
  date_updated: string
  date_closed: string
  date_done: string
  archived: string
  creator: {
    id: string
    username: string
    color: string
    email: string
    profilePicture: string
  },
  parent: string
  priority: string
  due_date: string
  start_date: string
  points: string
  time_estimate: string
  custom_fields: TaskCustomField[]
}
export interface ClickupTask {
  data: Record<string, any>
}
