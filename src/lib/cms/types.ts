interface filter {
  field: string
  value: string
}

export interface Img {
  widget: 'boolean'
  name: string
  label?: string
  default?: string
}

export interface Obj {
  widget: "object"
  name: string
  label?: string
  fields: Field[]
  default?: string
  summary?: string
}

export interface Bool {
  widget: 'boolean'
  name: string
  label?: string
  required?: boolean
  default?: boolean
}

export interface Str {
  widget: "string"
  name: string
  label?: string
  required?: boolean
  default?: string
  pattern?: string[]
}

interface Code { }
interface Color { }
interface Dte { }
interface DteT { }
interface Fle { }
interface Hid { }
interface Image { }
interface List { }
interface Map { }
interface Markdown { }
interface Num { }
interface Rel { }
interface Sel { }
interface Txt { }

export type Field = Str | Bool | Code | Color | Dte | DteT | Fle | Hid | Img | List | Map | Markdown | Num | Obj | Rel | Sel | Txt

export interface Collection {
  label: string
  name: string
  folder: string
  create: boolean
  identifier_field: string
  fields: Field[]
  slug: string
  filter?: filter
  preview_path?: string
  extenstion: 'yml' | 'toml' | 'json' | 'frontmatter' | 'yaml-frontmatter' | 'toml-frontmatter' | 'json-frontmatter'
}
