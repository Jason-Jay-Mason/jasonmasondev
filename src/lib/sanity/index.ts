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
  post: (slug: string) => any
  posts: () => any
}
function get(client: SanityClient): Getters {
  const home = () => client.fetch(`*[_type == 'home']{Hero,LinkGrid,Kanban,Contact}`)
  const posts = () => client.fetch(`
    *[_type == 'posts']{
      seo,
      body,
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
  }
}

interface Client {
  get: Getters
}
const sanity: Client = {
  get: get(client)
}

export default sanity
