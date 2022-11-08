import type { LayoutLoad } from './$types'
import { error } from '@sveltejs/kit'
export const prerender = true

//load the project page based on the slug
export const load: LayoutLoad = async ({ params,fetch }) => {
	try {
		const project = await import(`../../../content/projects/${params.project}.json`)
		const response = await fetch('/api/projects')
		const projects = await response.json()
		return {
			project,
			projects,
			slug: params.project
		}
	} catch (err) {
		//no robust error handeling for now we are doing 404 for all
		throw error(404, 'page not found')
	}
}
