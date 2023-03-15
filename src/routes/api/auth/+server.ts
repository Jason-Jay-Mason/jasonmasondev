//This is the auth endpoint that decap cms points to in the config.yml file
//For more info see https://decapcms.org/docs/configuration-options/#backend
import { redirect } from '@sveltejs/kit'
//TODO: it would be nice to have something like pcall in lua here where we get an ok status if the import works.
import { GITHUB_CLIENT_ID } from '$env/static/private';
import { config } from '../../../lib/cms/config'

//Github Oauth requires that we pass a random string as a search
//param so we use the crypto api to generate that
const state = crypto.randomUUID()

export const GET = async () => {
  //The Oauth endpoint
  //https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#1-request-a-users-github-identity
  const githubEndPoint = 'https://github.com/login/oauth/authorize?'
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    redirect_uri: config.domain + '/api/callback',
    state: state,
  })
  //All we need is a simple redirect with the params appended to the endpoint
  //after successfull authentication via github we hit the /api/callback endpoint to handle login
  throw redirect(301, githubEndPoint + params)
}
