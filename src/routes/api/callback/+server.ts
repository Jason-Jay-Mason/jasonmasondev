import type { RequestHandler } from './$types';
import type { AuthData } from '../../../lib/types';
import { error } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID, GITHUB_PRIVATE } from '$env/static/private';


export const GET = (async (e) => {
  const code = e.url.searchParams.get('code') as string
  //get the access token
  try {
    const githubEndPoint = 'https://github.com/login/oauth/access_token?'
    const params = new URLSearchParams({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_PRIVATE,
      redirect_uri: 'https://jasonmason.dev/api/callback',
      code: code,
    })
    const url = githubEndPoint + params
    const res: any = await fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json"
      }
    })
    const data = await res.json()
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
    throw error(500, 'Oauth Failed')
  }
}) satisfies RequestHandler


function createAuthResponse(status: string, content: AuthData) {
  return `
<script>
  const receiveMessage = (message) => {
    window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(content)}',
      message.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  
  window.opener.postMessage("authorizing:github", "*");
</script>
  `;
}

