export const prerender = true

import type { LegalData } from '$lib/types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';
import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = async () => {
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
