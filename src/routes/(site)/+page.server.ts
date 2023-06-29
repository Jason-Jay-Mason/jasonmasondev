export const prerender = true

import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit'
import { clickupApiV2 } from "$lib/clickup"


export const load: PageServerLoad = async (obj) => {
  try {
    const clickup = clickupApiV2('pk_14790665_GTGN961QCES7R4F433P5T1AOHU2TPWF2')
    const tasks = clickup.getTasks('901100158350', { include_closed: true })
    return tasks
  } catch (err) {
    console.error(err)
  }
}
