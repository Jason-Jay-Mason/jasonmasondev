import type { PageServerLoad } from './$types';
import type { HomeData, ClickupTask } from '$lib/types';
import { dev } from '$app/environment';
import jsonata from 'jsonata'
import { CLICKUP_API_KEY } from '$env/static/private'

const listId = '901100158350'
const baseUrl = 'https://api.clickup.com/api/v2'
const endPoint = `${baseUrl}/list/${listId}/task?`
const params = new URLSearchParams({
  "include_closed": "true"
})
const taskExpression = jsonata(`
  tasks.{
    'id': id,
    'status': status.status,
    'sharingToken': sharing.token,
    'teamId': team_id,
    'name':name,
    'description': description,
    'dueDate': due_date,
    'timeEstimate': time_estimate,
    'organization': custom_fields[name='organization'].value,
    'organizationLogoSrc': custom_fields[name = 'organization logo src'].value,
    'organizationHref': custom_fields[name = 'organization website'].value,
    'figmaHref': custom_fields[name = 'figma'].value,
    'githubHref': custom_fields[name = 'github'].value,
    'technologies': custom_fields[name = 'technologies'].value,
    'technologyMap': custom_fields[name = 'technologies'].type_config.options{
        id: label
    }
  }
`)

interface Getters {
  tasks: () => Promise<ClickupTask[]>
  backupTasks: () => Promise<ClickupTask[]>
}

function get(): Getters {

  const backupTasks = async () => {
    const backupTasks = await import(
  	/* @vite-ignore */ `../../../clickup-backup.json`
    )
    return backupTasks.default
  }

  const tasks = async () => {
    if (dev) {
      return await backupTasks()
    }

    const res = await fetch(endPoint + params, {
      method: "GET",
      headers: {
        "Authorization": CLICKUP_API_KEY
      }
    })

    const raw = await res.json()

    if (raw.err || !raw) {
      console.error(`There was a problem hitting the clickup endpoint ${endPoint} returned: ${raw.err}`)
      return await backupTasks()
    }

    let tasks = await taskExpression.evaluate(raw)

    for (const task of tasks) {
      if (task.technologies) {
        task.technologies = task.technologies.map((id: string) => task.technologyMap[id])
        delete task.technologyMap
      }
    }

    return tasks
  }

  return {
    backupTasks,
    tasks,
  }
}

interface Client {
  get: Getters
}

const sanity: Client = {
  get: get()
}

export default sanity
