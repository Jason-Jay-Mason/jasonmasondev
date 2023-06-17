import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { readdirSync } from 'node:fs'
import { mdsvex } from 'mdsvex'
import * as path from 'path'
import { fileURLToPath } from 'node:url'

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

//Get the root directory 
const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors

  extensions: ['.svelte', '.svelte.md', '.md', '.svx'],
  preprocess: [
    preprocess({
      postcss: true
    }),
    mdsvex({
      extensions: ['.md', '.svx'],
      layout: {
        legal: path.join(dirname, './src/lib/components/svx-layouts/legal.svelte'),
        home: path.join(dirname, './src/lib/components/svx-layouts/home.svelte')
      },
      smartypants: {
        dashes: 'oldschool'
      }
    })
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      entries: getPrerenderEntries()
    }
  }
}

export default config
