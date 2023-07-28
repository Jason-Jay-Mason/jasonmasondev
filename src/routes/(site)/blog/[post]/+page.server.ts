import type { PageServerLoad } from './$types';
import SanityApi from '$lib/sanity';
import { error } from '@sveltejs/kit';
import type { PostData } from '$lib/types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  const post = SanityApi.get.post(params.post)
  if (post) {
    return {
      post
    }
  }
  throw error(404, 'Page not found.')
}
