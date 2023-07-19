export const prerender = true

import type { PageServerLoad } from './$types';
import type { HomeData } from '$lib/types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';
import Clickup from '$lib/clickup';


export const load: PageServerLoad = async (): Promise<HomeData> => {
  try {
    const tasks = await Clickup.get.tasks()
    const homePages = await SanityApi.get.home()

    return {
      page: homePages[0],
      tasks,
    }
  } catch (err) {
    console.error(err)
    throw error(404, 'Page not found.')
  }
}
