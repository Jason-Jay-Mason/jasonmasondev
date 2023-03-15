import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { readdirSync } from 'node:fs'

function getPrerenderEntries() {
  let prerenderFolders = ['./src/content/company-pages/']
  // for each folder add the contents to the final arr
  let final = []
  for (const folder of prerenderFolders) {
    //get the file names in the dir 
    const files = readdirSync(folder, {
      withFileTypes: false
    })
    final = [...final, ...files]
  }
  // return the file names with a slash in front

  return final.map(file => {
    return `/${file.split('.')[0]}`
  })
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors

  preprocess: preprocess({
    postcss: true
  }),

  kit: {
    adapter: adapter(),
    prerender: {
      entries: getPrerenderEntries()
    }
  }
}

export default config
