export const prerender = true
import SanityApi from '$lib/sanity';
import type { PostData } from '$lib/types';


const head = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >`
const tail = `</urlset>`

export async function GET() {

  const routes = [
    '/',
    '/blog',
  ]

  const posts: PostData[] = await SanityApi.get.posts()

  for (const post of posts) {
    routes.push(`/blog/${post.slug}`)
  }

  const date = new Date()
  let links = ''

  for (const route of routes) {
    links = links + `
      <url>
        <loc>https://jasonmason.dev${route}</loc>
        <lastmod>${date.toISOString()}</lastmod>
      </url>
    `
  }


  return new Response((head + links + tail).trim(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  }
  );
}
