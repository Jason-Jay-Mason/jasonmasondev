import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  const posts = SanityApi.get.posts(params.tag)
  const tags = SanityApi.get.tags()
  if (posts) {
    return {
      posts,
      tags,
      tag: params.tag
    }
  }
  throw error(404, 'Page not found.')
}
