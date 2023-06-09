import type { Config } from "$lib/game/types";

export const homeConfig: Config = {
  minEnemies: 3,
  maxEnemies: 90,
  displayHud: true,
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
      thrust: 'k',
      left: 'j',
      right: 'l',
      shoot: 'a'
    },
    size: {
      w: 24,
      h: 60
    },
    position: {
      x: 50,
      y: 600,
    },
    shipPath: '/mustache.svg',
    thrusterPath: '/flame.svg',
    fireRate: 200
  },
  enemies: [
    {
      imgPath: '/vite.svg',
      size: {
        h: 50,
        w: 50
      },
      colors: [
        {
          r: 73,
          g: 198,
          b: 255,
          a: 1
        },
        {
          r: 255,
          g: 212,
          b: 39,
          a: 1
        },
        {
          r: 188,
          g: 51,
          b: 254,
          a: 1
        }
      ],
    },
  ],
}
