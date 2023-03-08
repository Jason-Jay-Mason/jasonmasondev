import { redirect } from '@sveltejs/kit'
import { GITHUB_CLIENT_ID } from '$env/static/private';
import { config } from '../../../lib/cms/config'

const state = crypto.randomUUID()

//This endpoint will grab all of my projects
export const GET = async () => {
  const githubEndPoint = 'https://github.com/login/oauth/authorize?'
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'repo,user',
    redirect_uri: config.domain + '/api/callback',
    state: state,
  })
  throw redirect(301, githubEndPoint + params)
}
