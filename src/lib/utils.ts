type IterableGlob = [path: string, resolver: Function]

//TODO need to actually make this type, this is a cop out
interface CompanyPage {
	slug: string
	data: object
}

export const fetchCompanyPages = async () => {
	//grab the company pages
	//vite function that globs a directory and returns {path}:{()=>import(...)}
	const globCompanyPages = import.meta.glob('/src/content/company-pages/*.json')
	//make the object iterable
	const iterable: IterableGlob[] = Object.entries(globCompanyPages)

	//return a single promise after iterating through all the promises and resoving them
	const companyPages: CompanyPage[] = await Promise.all(
		iterable.map(async ([path, resover]) => {
			let data = await resover()
			let slug = path.replaceAll('/src/content/company-pages/', '').replaceAll('.json', '')
			return {
				slug,
				data
			}
		})
	)

	return companyPages
}

//TODO actually make this type

import type { ProjectData } from './types'
import type { Project } from './types'

export const fetchProjects = async () => {
	//vite function that globs a directory and returns {path}:{()=>import(...)}
	const globProjects = import.meta.glob('/src/content/projects/*.json')
	//make the object iterable
	const iterable: IterableGlob[] = Object.entries(globProjects)

	//return a single promise after iterating through all the promises and resoving them
	const projects: Project[] = await Promise.all(
		iterable.map(async ([path, resover]) => {
			let data: ProjectData = await resover()

			let slug = path.replaceAll('/src/content/projects/', '').replaceAll('.json', '')
			return {
				slug,
				data
			}
		})
	)

	return projects
}
