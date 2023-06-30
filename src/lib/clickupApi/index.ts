
//Facad wrapper containing clickup v2 functionaility
//I don't have time to build this all out right now, but theoretically 
//this could be a library in the future exposing all clickup api functionaility programatically.
//This is set up in such a way that it is easly extensible

//https://clickup.com/api/clickupreference/operation/GetTasks/#!in=query&path=archived&t=request

import type { ApiKey, ClickupV2 } from './types'
import { get } from './get'


export function clickupApiV2(key: ApiKey): ClickupV2 {
  const baseUrl = 'https://api.clickup.com/api/v2'

  return {
    get: get(key, baseUrl)
  }
}









