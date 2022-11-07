import { fetchProjects } from '../../../lib/utils'
import { json } from '@sveltejs/kit'

//This endpoint will grab all of my projects
export const GET = async () => {
	const projects = await fetchProjects()
	return json(projects)
}
