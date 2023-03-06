import type { Collection, Field, Str, Obj } from './types'

//TODO: I need to impliment the ts version of the config.yml, I will do this later
//#region unfinished code
const company: Obj = {
  widget: "object",
  name: 'company',
  label: 'Company',
  fields: [
    {
      widget: 'string',
      name: 'name',
      label: 'Company Name',
    },
    {
      widget: 'image',
      name: 'logoSrc',
      label: 'Company Logo',
      choose_url: true,
    }
  ]
}
const slug: Str = {
  name: 'slug',
  widget: "string",
  label: 'Slug',
  required: true,
}
const companyPageFields: Field[] = [
  slug,
  company,
]

const companyPage: Collection = {
  name: 'company-page',
  label: 'Company Pages',
  extenstion: 'json',
  folder: 'src/content/company-pages',
  create: true,
  identifier_field: 'company.name',
  slug: '{{slug}}',
  fields: companyPageFields,
}

export const collections: Collection[] = [
  companyPage
]
//#endregion
