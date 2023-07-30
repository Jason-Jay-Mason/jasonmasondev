export const prerender = true;

import type { PageServerLoad } from './$types';
import type { LegalData } from '$lib/types';
import SanityApi from '$lib/sanity';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const legal: LegalData = (await SanityApi.get.legal(params.slug))[0]

    if (!legal) {
      throw error(404, 'Page not found.')
    }

    return {
      legal
    }
  } catch (err) {
    console.error(err)
    throw error(404, 'Page not found.')
  }
}
