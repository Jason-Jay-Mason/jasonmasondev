import type { ListId, GetTaskParams, GetTaskReturnFields, ApiKey, TaskData, ClickupTask } from "./types"
import Utils from './utils'

export enum TaskReturnNormalFields {
  id = 'id',
  name = 'name',
  status = 'status.status',
  orderindex = 'status.orderindex',
  date_created = 'date_created',
  due_date = 'due_date',
  time_spent = 'time_spent',
}


export function get(key: ApiKey, baseUrl: string) {
  const tasks = async (id: ListId, p?: GetTaskParams, f?: GetTaskReturnFields): Promise<TaskData> => {
    try {
      let endpoint = baseUrl + `/list/${id}/task`

      if (p) {
        const queryParams = Utils.createQueryParams(p)
        endpoint = endpoint + '?' + queryParams
      }

      const res = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Authorization: key,
        }
      }
      )

      const raw: TaskData = await res.json()

      return raw

    } catch (err) {
      throw new Error(`ClickupApiV2 getTasks: ${err}`)
    }
  }

  return {
    tasks
  }
}

const Helpers = {
  structureTaskData
}

function structureTaskData(raw: TaskData) {
  let final: ClickupTask = {
    data: []
  }
  for (let i = 0; i < raw.tasks.length; i++) {
    const task = raw.tasks[i]
    const customfieldsKey = 'custom_fields'
    for (const customfield of task[customfieldsKey]) {
      const name: string = customfield.name
      const value = customfield.value
      const key = name.replaceAll(' ', '_')

      switch (customfield.type) {
        case 'labels':
          let labels: string[] = []
          let activeLabels = new Set(customfield.value)
          customfield.type_config.options.forEach((label) => {
            if (activeLabels.has(label.id)) {
              labels.push(label.label)
            }
          })
          final.data[i][key] = labels
          break
        case 'short_text':

      }


      if (customfield.type === 'labels') {

      }

      final.data[i][key] = value
    }
  }
}


