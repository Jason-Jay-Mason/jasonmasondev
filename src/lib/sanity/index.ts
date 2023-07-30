import type { HomeData, PostData, Tag, LegalData } from "$lib/types";
import type { SanityClient } from "@sanity/client"
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ssq1ahcy",
  dataset: "production",
  apiVersion: "2023-07-18",
  useCdn: false
});

interface Getters {
  home: () => Promise<HomeData>
  post: (postSlug: string) => Promise<PostData>
  posts: (tagSlug?: string) => Promise<PostData[]>
  tags: () => Promise<Tag[]>
  legal: (pageSlug?: string) => Promise<LegalData[]>
}
export function get(client: SanityClient): Getters {
  const home = () => client.fetch(`*[_type == 'home']{
    Hero,
    LinkGrid,
    Kanban,
    Contact,
    "seo": seo{
      ...,
      "ogimage": ogimage {
        "src": image.asset -> url,
        altText
      }
    }
  }[0]`)
  const tags = () => client.fetch(`*[_type == 'tags']{name, "slug":slug.current}`)
  const posts = (tag?: string) => client.fetch(`
    *[_type == 'posts'${tag ? `&& references(*[_type == 'tags' && slug.current == '${tag}'][0]._id)` : ''}]{
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
      },
      "seo": seo{
        ...,
        "ogimage": ogimage {
          "src": image.asset -> url,
          altText
        }
      }
    }
  `)

  const post = (slug: string) => {
    return client.fetch(`
    *[_type == 'posts' && slug.current == '${slug}']{
      date,
      longTitle,
      shortTitle,
      readingTime,
      preview,
      "body":body[]{
        ...,
        asset != null => {
          "src": asset -> url
        }
      },
      "imgSrc":image.asset->url,
      "slug": slug.current,
      "tags": tags[] -> {
        name,
        "slug": slug.current
      },
      "seo": seo{
        ...,
        "ogimage": ogimage {
          "src": image.asset -> url,
          altText
        }
      }
    }[0]
  `)
  }

  const legal = (slug: string) => client.fetch(`
    *[_type == 'legal' ${slug ? `&& slug.current == '${slug}'` : ''}]{
      "slug": slug.current,
      body,
      title,
      seo,
    }
  `)

  return {
    home,
    post,
    posts,
    tags,
    legal,
  }
}

interface Client {
  get: Getters
}
const sanity: Client = {
  get: get(client)
}

export default sanity
