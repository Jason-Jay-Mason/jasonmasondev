export type IterableGlob = [path: string, resolver: Function]

export type FilterableData = Record<string, any>

export enum KanbanFilterType {
  nill,
  fuzzyFind,
  contains,
  picklist,
  dateRange
}
export interface DateRange {
  start: string
  end: string
}

export type KanbanFilter<T> = T extends string ? {
  id?: number,
  key: string,
  label: string,
  filterType: KanbanFilterType,
  options?: string[] | null,
  value: T,
} : {
  id?: number,
  key: string,
  label: string,
  filterType: KanbanFilterType,
  options?: string[] | null,
  value: T,
}

export type KanbanFilterOptions = Record<string, KanbanFilter<any>>

export enum KanbanFilterableProp {
  name = "Name",
  technologyIds = "Technologies",
  company = "Company",
  dueDate = "Due Date"
}

export interface ClickupTask {
  id: string
  status: string
  sharingToken: string | null
  teamId: string
  name: string
  description: string | null
  dueDate: string
  timeEstimate: string | null
  organization: string | null
  organizationLogoSrc?: string | null
  organizationHref?: string | null
  figmaHref?: string | null
  githubHref?: string | null
  technologies: string[]
}
export interface HomeData {
  tasks: ClickupTask[]
}


export interface GridLinkData {
  headline: string
  hook: string
  href: string
  animationComponent?: string
}

//Auth 
export interface AuthData {
  token: string
  provider: string
}

// Pages Components
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
export interface Interest {
  title: string
  iconSrc: string
}
export interface Profile {
  body: string
  headline: Headline
  img: Img
  interests: Interest[]
}
export interface TagButtons {
  [key: string]: TagSelect
}

export interface SelectedProjects {
  [key: string]: Project
}

export interface GridDisplayElement {
  slug: string
  data: {
    body: string
    headline: Headline
    img: Img
    href?: string
  }

}

export interface AnimationFrame {
  endValue: number
  length: number
  start: number
  startValue: number
}
export interface ExpereinceRecord {
  description: string
  headline: Headline
  startYear: number
  endYear: number
  fadeIn: AnimationFrame
}

export interface Skill {
  title: string
  growth: AnimationFrame[]
}

export interface Experience {
  headline: Headline
  records: ExpereinceRecord[]
  skills: Skill[]

}
