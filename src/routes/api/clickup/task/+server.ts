import { clickupApiV2 } from "$lib/clickup"


export async function GET() {
  try {
    const clickup = clickupApiV2('pk_14790665_GTGN961QCES7R4F433P5T1AOHU2TPWF2')
    const tasks = await clickup.getTasks('901100158350')
    return tasks
  } catch (err) {
    console.error(err)
  }
}
