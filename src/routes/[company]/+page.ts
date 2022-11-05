import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageLoad = async ({ params, fetch }) => {
	try {
		//grab the company page from the slug
		const page = await import(`../../content/company-pages/${params.company}`)
		//also grab all of the projects so that we can render them to the projects component
		const response = await fetch('/api/projects')
		const projects = await response.json()

		return {
			page,
			projects
		}
	} catch (err) {
		//just throw a 404 for now for the user if there are errors, this project is not needing to have robust error handleing
		throw error(404, 'Page not found')
	}
}
