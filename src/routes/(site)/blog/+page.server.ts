import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';

export const load: PageServerLoad = async () => {
  const posts = SanityApi.get.posts()
  const tags = SanityApi.get.tags()
  if (posts) {
    return {
      posts,
      tags
    }
  }
  throw error(404, 'Page not found.')
}
