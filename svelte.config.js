import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

const config = {
  extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
  preprocess: [
    preprocess({
      postcss: true
    }),
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['/']
    }
  }
}

export default config
