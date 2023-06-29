import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { readdirSync } from 'node:fs'
import { mdsvex } from 'mdsvex'
import * as path from 'path'
import { fileURLToPath } from 'node:url'

function getPrerenderEntries() {
  let prerenderFolders = ['./src/content/company-pages/']

  let final = []
  for (const folder of prerenderFolders) {
    const files = readdirSync(folder, {
      withFileTypes: false
    })
    final = [...final, ...files]
  }

  return final.map(file => {
    return `/${file.split('.')[0]}`
  })
}

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = {
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
