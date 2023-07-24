import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';

export const load: PageServerLoad = async (blob) => {
  const posts = SanityApi.get.posts()
  const tags = SanityApi.get.tags()
  console.log(blob.url.searchParams)
  if (posts) {
    return {
      filter: blob.url.searchParams.get('tag') || 'all',
      posts,
      tags,
    }
  }
  throw error(404, 'Page not found.')
}