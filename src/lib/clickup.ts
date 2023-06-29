
//Facad wrapper containing clickup v2 functionaility
//I don't have time to build this all out right now, but theoretically 
//this could be a library in the future exposing all clickup api functionaility programatically.
//This is set up in such a way that it is easly extensible

//https://clickup.com/api/clickupreference/operation/GetTasks/#!in=query&path=archived&t=request

interface GetTaskParams {
  archived?: boolean
  statuses?: string
  include_closed?: boolean
}

enum TaskReturnNormalFields {
  id = 'id',
  name = 'name',
  status = 'status.status',
  orderindex = 'status.orderindex',
  date_created = 'date_created',
  due_date = 'due_date',
  time_spent = 'time_spent',
}

enum TaskCustomFields {
  name = 'name',
  value = 'value'
}

interface GetTaskReturnFields {
  fields: TaskReturnNormalFields[],
  custom?: TaskCustomFields[]
}

interface TaskData {
  tasks: Record<string, any>[]
  last_page: boolean
}

type ListId = string
type ApiKey = string


type ClickupV2 = {
  getTasks: (id: ListId, p?: GetTaskParams, f?: GetTaskReturnFields) => Promise<TaskData>
}

export function clickupApiV2(key: ApiKey): ClickupV2 {
  const baseUrl = 'https://api.clickup.com/api/v2'

  const getTasks = async (id: ListId, p?: GetTaskParams, f?: GetTaskReturnFields): Promise<TaskData> => {
    try {
      let endpoint = baseUrl + `/list/${id}/task`

      if (p) {
        const queryParams = Helpers.createQueryParams(p)
        endpoint = endpoint + '?' + queryParams
        console.log(endpoint)
      }

      const res = await fetch(endpoint, {
        method: 'GET',
        headers: {
          Authorization: key,
        }
      }
      )

      const raw: TaskData = await res.json()

      let final: TaskData = {
        tasks: raw.tasks,
        last_page: raw.last_page
      }
      for (let i = 0; i < raw.tasks.length; i++) {
        const task = raw.tasks[i]
        const customfieldsKey = 'custom_fields'
        for (const customfield of task[customfieldsKey]) {
          const name: string = customfield['name']
          const key = name.replaceAll(' ', '_')
          const value = customfield['value']
          //TODO: make the tag field here such that final.tasks[i][key] -> [tagLabel, tagLabel, ..., tagLabel] where taglabel is selected label n for the task
          final.tasks[i][key] = value
        }
      }
      return final
    } catch (err) {
      throw new Error(`ClickupApiV2 getTasks: ${err}`)
    }
  }

  return {
    getTasks
  }
}


const Helpers = {
  createQueryParams,
  getValueByAddress,
}



function createQueryParams(params: Record<string, any>): URLSearchParams {
  let queryParams: Record<string, string> = {}
  for (const key in params) {
    queryParams[key] = String(params[key])
  }
  return new URLSearchParams(queryParams)
}


function getValueByAddress(address: string, obj: Record<string, any>): string[] {
  const keys = address.split('.')

  if (keys.length === 1) {
    return [keys[0], obj[keys[0]]]
  }

  const [currentKey, ...remainingKeys] = keys

  if (obj.hasOwnProperty(currentKey)) {
    return getValueByAddress(remainingKeys.join('.'), obj[currentKey])
  }

  throw new Error(`The address ${address} was not found on the data returned from clickup. Please make sure ${address} is a valid address that one would expect to receive from the clickup server`)
}
