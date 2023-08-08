export const prerender = true;

import type { PageServerLoad } from './$types';
import type { PostData } from '$lib/types';
import SanityApi from '$lib/sanity';
import { error } from '@sveltejs/kit';
import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import mathjax from 'mathjax'

hljs.registerLanguage("typescript", typescript)


export const load: PageServerLoad = async ({ params }) => {
  const math = await mathjax.init({
    loader: { load: ['input/tex', 'output/svg'] }
  })
  try {
    let post: PostData = await SanityApi.get.post(params.post)

    console.log(math)
    post.body = post.body.map(text => {
      if (text._type === 'code') {
        text.markup = hljs.highlightAuto(text.code).value
      }
      if (text._type === 'latex') {
        text.markup = math.tex2mml(text.body)
      }
      return text
    })

    if (!post) {
      throw error(404, 'Page not found.')
    }

    return {
      post
    }
  } catch (err) {
    console.error(err)
    throw error(404, 'Page not found.')
  }
}
