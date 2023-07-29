export const prerender = true

import type { PageServerLoad } from './$types';
import type { ClickupTask, HomeData } from '$lib/types';
import { error } from '@sveltejs/kit';
import SanityApi from '$lib/sanity';
import Clickup from '$lib/clickup';


export const load: PageServerLoad = async () => {
  try {
    const tasks: ClickupTask[] = await Clickup.get.tasks()
    const homePages: HomeData = await SanityApi.get.home()

    if (!tasks || !homePages) {
      throw error(404, 'Page not found.')
    }

    return {
      page: homePages,
      tasks,
    }

  } catch (err) {
    console.error(err)
    throw error(404, 'Page not found.')
  }
}
