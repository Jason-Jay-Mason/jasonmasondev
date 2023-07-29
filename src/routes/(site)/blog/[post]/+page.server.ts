import type { PageServerLoad } from './$types';
import SanityApi from '$lib/sanity';
import { error } from '@sveltejs/kit';
import type { PostData } from '$lib/types';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  try {
    const post: PostData = await SanityApi.get.post(params.post)

    if (!post) {
      throw error(404, 'Page not found.')
    }

    return {
      post
    }
  } catch (err) {
    console.error(err)
    throw error(404, 'Page not found.')
  }
}
