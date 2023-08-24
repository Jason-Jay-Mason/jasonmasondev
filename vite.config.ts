import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'

const config: UserConfig = {
  plugins: [
    sveltekit(),
    partytownVite({
      dest: join(process.cwd(), '.svelte-kit/output/client/~partytown')
    })
  ],
  server: {
    host: false
  }
}

export default config
