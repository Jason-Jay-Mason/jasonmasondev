import adapter from '@sveltejs/adapter-auto'
import autoprefixer from 'autoprefixer'
import preprocess from 'svelte-preprocess'


const config = {
  extensions: ['.svelte'],
  preprocess: [
    preprocess({
      preserve: ['partytown'],
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
