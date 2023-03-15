import type { LayoutLoad } from './$types'
import { error } from '@sveltejs/kit'
export const prerender = true

export const load: LayoutLoad = async ({ params, fetch }) => {
  try {
    //No need for REST here because I am storing the content on the repo
    const project = await import(`../../../content/projects/${params.project}.json`)
    //Get the projects for generating the random projects at the bottom of the project page
    const response = await fetch('/api/projects')
    const projects = await response.json()
    return {
      project,
      projects,
      slug: params.project
    }
  } catch (err) {
    //No robust error handeling for now we are doing 404 for all
    throw error(404, 'page not found')
  }
}
