//Kanban
export type FilterableData = Record<string, any>

export type KanbanFilterOptions = Record<string, KanbanFilter<any>>

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

export type KanbanFilter<T> = {
  id?: number,
  key: string,
  label: string,
  filterType: KanbanFilterType,
  options?: string[] | null,
  value: T,
}

//Clickup
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

//Contact

export enum FormInputTypes {
  text = "text",
  phone = "phone",
  email = "email",
  textarea = "text-area"
}

export enum Months {
  Jan = 0,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

//legal 
export interface LegalData {
  seo: SeoData
  date: string
  title: string
  slug: string
  body: object[]
}

//Utility
export interface AnimationFrame {
  endValue: number
  length: number
  start: number
  startValue: number
}

export interface SeoData {
  title: string
  description: string
  robots: {
    follow: boolean,
    index: boolean,
  }
  ogtype: string,
  ogurl: string,
  ogimage: {
    src: string,
    altText: string,
  },
}

//Home
export interface HeroData {
  headline: string
  cta: Cta
  hook: string
}
export interface Cta {
  isVideo: boolean
  hrefOrSrc: string
  innerText: string
}
export interface GridLinkData {
  headline: string
  hook: string
  href: string
  animationComponent?: string[]
}
export interface HomeData {
  Hero: HeroData
  LinkGrid: {
    links: GridLinkData[]
  }
  Kanban: {
    headline: Headline
  }
  Contact: {
    headline: Headline,
    endPoint: string
  }
  seo: SeoData
}

//Blog
export interface Tag {
  name: string
  slug: string
}

export interface TagSelect {
  selected: boolean
  title: string
}

export interface PostData {
  seo: SeoData
  date: string
  longTitle: string
  preview: string
  readingTime: number
  shortTitle: string
  slug: string
  imgSrc: string
  tags: Tag[]
  body: object[]
}

//Nav
export interface Link {
  href: string
  innerText: string
}

export interface Navbar {
  links: Link[]
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

// Page Components
export interface Headline {
  main: string
  sub: string
}

export interface CoverLetter {
  headline: Headline
  body: string
}

//TODO: delete these mabey?

// export enum KanbanFilterableProp {
//   name = "Name",
//   technologyIds = "Technologies",
//   company = "Company",
//   dueDate = "Due Date"
// }

//Auth 
// export interface AuthData {
//   token: string
//   provider: string
// }
export interface Img {
  src: string
  alt: string
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
