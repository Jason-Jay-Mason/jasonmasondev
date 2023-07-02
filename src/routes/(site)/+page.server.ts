export const prerender = true

import type { PageServerLoad } from './$types';
import type { ClickupData } from '$lib/types';
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
    {
      "backlog": [tasks['backlog' in status.status].{
          'id':id,
          'sharingToken': sharing.token,
          'teamId': team_id,
          'name':name,
          'description': description,
          'dueDate': due_date,
          'timeEstimate': time_estimate,
          'companyLogoSrc': custom_fields[name = 'company logo src'].value,
          'companyHref': custom_fields[name = 'company website'].value,
          'figmaHref': custom_fields[name = 'figma'].value,
          'githubHref': custom_fields[name = 'girhub'].value,
          'technologyIds': custom_fields[name = 'technologies'].value
      }],
      "doing": [tasks['doing' in status.status].{
          'id':id,
          'sharingToken': sharing.token,
          'teamId': team_id,
          'name':name,
          'description': description,
          'dueDate': due_date,
          'timeEstimate': time_estimate,
          'companyLogoSrc': custom_fields[name = 'company logo src'].value,
          'companyHref': custom_fields[name = 'company website'].value,
          'figmaHref': custom_fields[name = 'figma'].value,
          'githubHref': custom_fields[name = 'girhub'].value,
          'technologyIds': custom_fields[name = 'technologies'].value
          }],
      "done": [tasks['done' in status.status].{
          'id':id,
          'sharingToken': sharing.token,
          'teamId': team_id,
          'name':name,
          'description': description,
          'dueDate': due_date,
          'timeEstimate': time_estimate,
          'companyLogoSrc': custom_fields[name = 'company logo src'].value,
          'companyHref': custom_fields[name = 'company website'].value,
          'figmaHref': custom_fields[name = 'figma'].value,
          'githubHref': custom_fields[name = 'girhub'].value,
          'technologyIds': custom_fields[name = 'technologies'].value
      }]
    }
`)

export const load: PageServerLoad = async (): Promise<any> => {
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
      return backupTasks.default
    }

    const tasks = await expression.evaluate(raw)
    return tasks

  } catch (err) {
    throw error(404, 'Page not found')
  }
}
