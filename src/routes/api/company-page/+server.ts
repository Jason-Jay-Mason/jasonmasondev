import { fetchCompanyPages } from '../../../lib/utils'
import { json } from '@sveltejs/kit'

//this endpoint will fetch all of the company pages, I'll add types later
//TODO create company type
export const GET = async () => {
	//use the utility function to fetch the company pages
	const companyPages = await fetchCompanyPages()
	//return json
	return json(companyPages)
}
