//setting the static prerender on the layout level until further notice. ie, we need server stuff like edge functions
export const prerender = true

import type { LayoutLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: LayoutLoad = async ({ params, fetch }) => {
	try {
		//grab the company page from the slug vite ignore is there to eliminate the warning when a param is not found
		const page = await import(
			/* @vite-ignore */ `../../content/company-pages/${params.company}.json`
		)
		//also grab all of the projects so that we can render them to the projects component
		const response = await fetch('/api/projects')
		const projects = await response.json()

		return {
			page,
			projects,
			slug: params.company
		}
	} catch (err) {
		//just throw a 404 for now for the user if there are errors, this project is not needing to have robust error handling
		throw error(404, 'Page not found')
	}
}
