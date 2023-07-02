export const prerender = true

import type { LayoutLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: LayoutLoad = async ({ params, fetch }) => {
  try {
    const page = await import(
			/* @vite-ignore */ `../../content/company-pages/${params.company}.json`
    )

    const response = await fetch('/api/projects')
    const projects = await response.json()

    return {
      page,
      projects,
      slug: params.company
    }
  } catch (err) {
    throw error(404, 'Page not found')
  }
}
