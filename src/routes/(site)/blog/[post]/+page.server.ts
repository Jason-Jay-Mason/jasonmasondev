import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';

export const load: PageServerLoad = async ({ params }) => {
  const post = SanityApi.get.post(params.post)
  if (post) {
    return post
  }
  throw error(404, 'Page not found.')
}
