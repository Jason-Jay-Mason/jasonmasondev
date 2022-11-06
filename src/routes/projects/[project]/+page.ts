import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

//load the project page based on the slug
export const load: PageLoad = async ({ params }) => {
	try {
		const project = await import(
			/* @vite-ignore */ `../../../content/projects/${params.project}.json`
		)
		return {
			project
		}
	} catch (err) {
		//no robust error handeling for now we are doing 404 for all
		throw error(404, 'page not found')
	}
}
