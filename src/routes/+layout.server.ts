export const prerender = true

import type { PageServerLoad } from './$types';
import type { LegalData } from '$lib/types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';


export const load: PageServerLoad = async () => {
  try {
    const legal: LegalData[] = await SanityApi.get.legal()

    if (!legal) {
      throw error(404, 'Page not found.')
    }

    return {
      legal,
    }

  } catch (err) {
    console.error(err)
    throw error(404, 'Page not found.')
  }
}
