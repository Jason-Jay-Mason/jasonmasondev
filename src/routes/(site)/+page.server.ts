export const prerender = true

import type { PageServerLoad } from './$types';
import type { HomeData } from '$lib/types';
import { error } from '@sveltejs/kit';
import jsonata from 'jsonata'
import { CLICKUP_API_KEY } from '$env/static/private'

const listId = '901100158350'
const baseUrl = 'https://api.clickup.com/api/v2'
const endPoint = `${baseUrl}/list/${listId}/task?`
const params = new URLSearchParams({
  "include_closed": "true"
})

const expression = jsonata(`
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



export const load: PageServerLoad = async (): Promise<HomeData> => {
  try {
    const res = await fetch(endPoint + params, {
      method: "GET",
      headers: {
        "Authorization": CLICKUP_API_KEY
      }
    })

    const raw = await res.json()

    if (raw.err) {
      console.error(`There was a problem hitting the clickup endpoint ${endPoint} returned: ${raw.err}`)

      const backupTasks = await import(
			/* @vite-ignore */ `../../../clickup-backup.json`
      )
      console.log(backupTasks.default)
      return {
        tasks: backupTasks.default
      }
    }

    let tasks = await expression.evaluate(raw)
    for (const task of tasks) {
      task.technologies = task.technologies.map((id: string) => task.technologyMap[id])
      delete task.technologyMap
    }

    return {
      tasks,
    }

  } catch (err) {
    throw error(404, 'Page not found')
  }
}
