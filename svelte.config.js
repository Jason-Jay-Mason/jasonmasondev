import adapter from '@sveltejs/adapter-auto'
import autoprefixer from 'autoprefixer'
import preprocess from 'svelte-preprocess'


const config = {
  extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer()]
      }
    }),
  ],

  kit: {
    adapter: adapter(),
  }
}

export default config
