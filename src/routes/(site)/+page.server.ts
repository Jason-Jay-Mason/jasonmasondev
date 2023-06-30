export const prerender = true

import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'
import { clickupApiV2 } from "$lib/clickupApi"
import jsonata from 'jsonata'


export const load: PageServerLoad = async (obj) => {
  try {
    const clickup = clickupApiV2('pk_14790665_GTGN961QCES7R4F433P5T1AOHU2TPWF2')
    const raw = await clickup.get.tasks('901100158350', { include_closed: true })

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
