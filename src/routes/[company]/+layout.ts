// All pages will be rendered on build time with prerender true."Entries" are programatically generated from content folders. See svelte config. 
export const prerender = true

import type { LayoutLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: LayoutLoad = async ({ params, fetch }) => {
  try {
    //Grab the company page from the slug vite ignore is there to eliminate the warning when a param is not found
    const page = await import(
			/* @vite-ignore */ `../../content/company-pages/${params.company}.json`
    )
    //Also grab all of the projects so that we can render them to the projects component
    const response = await fetch('/api/projects')
    const projects = await response.json()

    return {
      page,
      projects,
      slug: params.company
    }
  } catch (err) {
    //Just throw a 404 for now if there are errors, this project doesn't need to have robust error handling
    throw error(404, 'Page not found')
  }
}
