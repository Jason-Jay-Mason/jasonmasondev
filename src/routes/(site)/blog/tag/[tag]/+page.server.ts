import type { PageServerLoad } from './$types';
import type { PostData, Tag } from '$lib/types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
  try {
    const posts: PostData[] = await SanityApi.get.posts(params.tag)
    const tags: Tag[] = await SanityApi.get.tags()

    if (!posts || !tags) {
      throw error(404, 'Page not found.')
    }

    return {
      posts,
      tags,
      tag: params.tag
    }

  } catch (err) {
    console.error(err)
    throw error(404, 'Page not found.')
  }
}
