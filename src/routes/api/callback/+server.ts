// This is the endpoint passed to github Oauth on successfull authentication
// see https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github
import type { RequestHandler } from './$types';
import { createAuthResponse } from '../../../lib/utils';
import { error } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID, GITHUB_PRIVATE } from '$env/static/private';
import { config } from '../../../lib/cms/config'


export const GET = (async (e) => {
  // Github gives us a code that we need to send a GET request for a token
  const code = e.url.searchParams.get('code') as string
  //Get the access token
  try {
    const githubEndPoint = 'https://github.com/login/oauth/access_token?'
    const params = new URLSearchParams({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_PRIVATE,
      redirect_uri: config.domain + '/api/callback',
      code: code,
    })
    const url = githubEndPoint + params
    //TODO: it would be best practice to create an interface on how this data should look
    const res: any = await fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json"
      }
    })
    const data = await res.json()
    //Utility function that will post the token to the parent window to authorize the user when returned
    const message = createAuthResponse('success', {
      token: data.access_token,
      provider: 'github'
    })

    return new Response(message, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8"
      }
    })

  } catch (err) {
    // More robust error handling is best practice, but this is my personl site, so for now lets skip it
    throw error(500, 'Oauth Failed')
  }
}) satisfies RequestHandler
