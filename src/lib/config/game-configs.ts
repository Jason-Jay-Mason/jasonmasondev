import type { Config } from "$lib/game/types";
import { multiplyer, enemies } from './enemies'

export const mustachioConfig: Config = {
  minEnemies: 9,
  maxEnemies: 20,
  displayHud: true,
  showFps: false,
  showHitBox: false,
  npc: false,
  lasers: [
    '/h-laser.svg',
    '/j-laser.svg',
    '/k-laser.svg',
    '/l-laser.svg',
  ],
  player: {
    godMode: false,
    controls: {
      thrust: 'k',
      left: 'h',
      right: 'l',
      shoot: 'j'
    },
    size: {
      w: 2.6 * multiplyer,
      h: 6.1 * multiplyer
    },
    position: {
      x: 0,
      y: 0,
    },
    shipPath: '/mustache.svg',
    thrusterPath: '/flame.svg',
    fireRate: 200
  },
  enemies
}

export const homeConfig: Config = {
  minEnemies: 8,
  maxEnemies: 9,
  displayHud: false,
  showFps: false,
  showHitBox: false,
  npc: true,
  lasers: [
    '/h-laser.svg',
    '/j-laser.svg',
    '/k-laser.svg',
    '/l-laser.svg',
  ],
  player: {
    godMode: true,
    controls: {
      thrust: '-',
      left: '-',
      right: '-',
      shoot: '-'
    },
    size: {
      w: 2.6 * multiplyer,
      h: 6.1 * multiplyer
    },
    position: {
      x: -30,
      y: 300,
    },
    shipPath: '/mustache.svg',
    thrusterPath: '/flame.svg',
    fireRate: 200
  },
  enemies
}
