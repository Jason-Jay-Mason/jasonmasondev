export const prerender = true

import type { PageServerLoad } from './$types';
import jsonata from 'jsonata'

//TODO: put this in env
const apiKey = 'pk_14790665_GTGN961QCES7R4F433P5T1AOHU2TPWF2'

const listId = '901100158350'
const baseUrl = 'https://api.clickup.com/api/v2'
const endPoint = `${baseUrl}/list/${listId}/task?`
const params = new URLSearchParams({
  "include_closed": "true"
})

export const load: PageServerLoad = async (obj) => {
  try {

    const res = await fetch(endPoint + params, {
      method: "GET",
      headers: {
        "Authorization": apiKey
      }
    })

    const raw = await res.json()

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

    const tasks = await expression.evaluate(raw)
    return tasks

  } catch (err) {
    console.error(err)
  }
}
