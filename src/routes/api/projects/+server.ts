import { fetchContent } from '../../../lib/utils'
import { json } from '@sveltejs/kit'

//This endpoint will grab all of my projects
export const GET = async () => {
  const projects = await fetchContent('projects')
  return json(projects)
}
