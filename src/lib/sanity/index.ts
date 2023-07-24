import type { SanityClient } from "@sanity/client"
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ssq1ahcy",
  dataset: "production",
  apiVersion: "2023-07-18",
  useCdn: false
});

interface Getters {
  home: () => any
  post: (postSlug: string) => any
  posts: (tagSlug?: string) => any
  tags: () => any
}
function get(client: SanityClient): Getters {
  const home = () => client.fetch(`*[_type == 'home']{Hero,LinkGrid,Kanban,Contact}`)
  const tags = () => client.fetch(`*[_type == 'tags']{name, "slug":slug.current}`)
  const posts = (tag?: string) => client.fetch(`
    *[_type == 'posts'${tag ? `&& references(*[_type == 'tags' && slug.current == '${tag}'][0]._id)` : ''}]{
      seo,
      preview,
      date,
      image,
      longTitle,
      shortTitle,
      readingTime,
      "imgSrc":image.asset->url,
      "slug": slug.current,
      "tags": tags[] -> {
        name,
        "slug": slug.current
      }
    }
  `)

  const post = (slug: string) => {
    return client.fetch(`
    *[_type == 'posts' && slug.current == '${slug}']{
      seo,
      body,
      date,
      longTitle,
      shortTitle,
      readingTime,
      preview,
      "imgSrc":image.asset->url,
      "slug": slug.current,
      "tags": tags[] -> {
        name,
        "slug": slug.current
      }
    }[0]
  `)
  }

  return {
    home,
    post,
    posts,
    tags
  }
}

interface Client {
  get: Getters
}
const sanity: Client = {
  get: get(client)
}

export default sanity
