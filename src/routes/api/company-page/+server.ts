import { fetchContent } from '../../../lib/utils'
import { json } from '@sveltejs/kit'

//This endpoint will fetch all of the company pages
export const GET = async () => {
  const companyPages = await fetchContent('company-pages')
  return json(companyPages)
}
