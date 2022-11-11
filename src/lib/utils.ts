
//Helper that gets a styles value
//Progress is the progress value from an AnmiationFrame component
//Start: the progress value that the animation will start n>0<1
//Length: the duration of the animation n>0<1
//startValue: The desired css properties start value
//endValue: The desired css properties end value
export function getStyleValue(progress:number, start:number, length:number, startValue:number, endValue:number) {
	let animationProgress = (progress - start) / length; // get the progress through this animation as a percentage
	//return the start value if we are not at the animation yet
	if (animationProgress < 0) {
		return startValue;
	}
	//return the end value if we are at the end of the animation
	if (animationProgress > 1) {
		return endValue;
	}
	let valueDistance = endValue - startValue; //get the difference in start and end value
	return startValue + animationProgress * valueDistance; //return the current value
}





type IterableGlob = [path: string, resolver: Function]


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
