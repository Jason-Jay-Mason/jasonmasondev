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
