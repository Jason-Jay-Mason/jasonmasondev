export interface Headline {
	main: string
	sub: string
}

export interface CoverLetter {
	headline: Headline
	body: string
}

export interface Cta {
	isVideo: boolean
	hrefOrSrc: string
	innerText: string
}

export interface Link {
	href: string
	innerText: string
}

export interface Navbar {
	links: Link[]
}

export interface Img {
	src: string
	alt: string
}

export interface ProjectData {
	body: string
	cta: Cta
	headline: Headline
	logo: Img
	year: number
	img: Img
	githubHref?: string
	tags: string[]
}
export interface Project {
	slug: string
	data: ProjectData
}

export interface TagSelect {
	selected: boolean
	title: string
}

export interface TagButtons {
	[key: string]: TagSelect
}

export interface SelectedProjects {
	[key: string]: Project
}

export interface GridDisplayElement{
	slug:string
	data:{
	body:string
	headline: Headline
	img:Img 
	href?: string
	}

}
