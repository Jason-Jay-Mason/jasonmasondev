import type { Config } from "$lib/game/types";
const sizeRatio = 12
const braze = {
  imgPath: '/brz-logo.svg',
  size: {
    h: 5 * sizeRatio,
    w: 5 * sizeRatio,
  },
  colors: [
    {
      r: 0,
      g: 0,
      b: 0,
      a: 1,
    }
  ]
}
const figma = {
  imgPath: '/fig-logo.svg',
  size: {
    h: 5.5 * sizeRatio,
    w: 3.5 * sizeRatio,
  },
  colors: [
    {
      r: 10,
      g: 207,
      b: 131,
      a: 1,
    },
    {
      r: 26,
      g: 188,
      b: 254,
      a: 1,
    },
    {
      r: 162,
      g: 89,
      b: 255,
      a: 1
    },
    {
      r: 242,
      g: 78,
      b: 30,
      a: 1
    }
  ]
}
const hubspot = {
  imgPath: '/hs-logo.svg',
  size: {
    h: 5 * sizeRatio,
    w: 5 * sizeRatio
  },
  colors: [
    {
      r: 255,
      g: 122,
      b: 89,
      a: 1
    },
  ]
}
const neovim = {
  imgPath: '/vim-logo.svg',
  size: {
    h: 5 * sizeRatio,
    w: 5 * sizeRatio,
  },
  colors: [
    {
      r: 22,
      g: 176,
      b: 237,
      a: 1,
    },
    {
      r: 125,
      g: 182,
      b: 67,
      a: 0,
    }
  ]
}
const javascript = {
  imgPath: '/js-logo.svg',
  size: {
    h: 4.0 * sizeRatio,
    w: 4.0 * sizeRatio,
  },
  colors: [
    {
      r: 247,
      g: 223,
      b: 30,
      a: 1
    },
    {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }
  ]
}

const vite = {
  imgPath: '/vite.svg',
  size: {
    h: 5 * sizeRatio,
    w: 5 * sizeRatio,
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
}

const activecampaign = {
  imgPath: '/acc-logo.svg',
  size: {
    h: 5.5 * sizeRatio,
    w: 3.6 * sizeRatio
  },
  colors: [
    {
      r: 53,
      g: 106,
      b: 230,
      a: 1
    }
  ]
}

const salesforce = {
  imgPath: '/sf-logo.svg',
  size: {
    h: 5.0 * sizeRatio,
    w: 7.1 * sizeRatio
  },
  colors: [
    {
      r: 0,
      g: 161,
      b: 224,
      a: 1
    },
    {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }
  ]
}

const react = {
  imgPath: '/r-logo.svg',
  size: {
    h: 5.0 * sizeRatio,
    w: 5.0 * sizeRatio,
  },
  colors: [
    {
      r: 97,
      g: 218,
      b: 251,
      a: 1
    }
  ]
}

const svelte = {
  imgPath: '/slv-logo.svg',
  size: {
    h: 5.0 * sizeRatio,
    w: 5.0 * sizeRatio,
  },
  colors: [
    {
      r: 255,
      g: 62,
      b: 0,
      a: 1,
    },
    {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }
  ]
}
const typescript = {
  imgPath: '/ts-logo.svg',
  size: {
    h: 4.5 * sizeRatio,
    w: 4.5 * sizeRatio,
  },
  colors: [
    {
      r: 49,
      g: 120,
      b: 198,
      a: 1
    },
    {
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }
  ]
}
const next = {
  imgPath: '/njs-logo.svg',
  size: {
    h: 5.0 * sizeRatio,
    w: 5.0 * sizeRatio
  },
  colors: [
    {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }
  ]
}
const golang = {

  imgPath: '/gl-logo.svg',
  size: {
    h: 3.0 * sizeRatio,
    w: 9.0 * sizeRatio,
  },
  colors: [
    {
      r: 0,
      g: 172,
      b: 215,
      a: 1
    }
  ]
}
const tailwind = {
  imgPath: '/tw-logo.svg',
  size: {
    h: 3.5 * sizeRatio,
    w: 7.5 * sizeRatio
  },
  colors: [
    {
      r: 7,
      g: 182,
      b: 213,
      a: 1
    }
  ]
}
const sass = {
  imgPath: '/sass-logo.svg',
  size: {
    h: 4.0 * sizeRatio,
    w: 7 * sizeRatio,
  },
  colors: [
    {
      r: 205,
      g: 103,
      b: 153,
      a: 1
    }
  ]
}
const google = {
  imgPath: '/gc-logo.svg',
  size: {
    h: 5.0 * sizeRatio,
    w: 5.0 * sizeRatio
  },
  colors: [
    {
      r: 52,
      g: 168,
      b: 83,
      a: 1
    },
    {
      r: 66,
      g: 133,
      b: 244,
      a: 1
    },
    {
      r: 234,
      g: 67,
      b: 53,
      a: 1
    },
    {
      r: 251,
      g: 188,
      b: 5,
      a: 1
    }
  ]
}


export const homeConfig: Config = {
  minEnemies: 9,
  maxEnemies: 15,
  displayHud: true,
  showFps: true,
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
      w: 2.5 * sizeRatio,
      h: 6.0 * sizeRatio
    },
    position: {
      x: 30,
      y: 300,
    },
    shipPath: '/mustache.svg',
    thrusterPath: '/flame.svg',
    fireRate: 200
  },
  enemies: [
    activecampaign,
    braze,
    figma,
    hubspot,
    tailwind,
    neovim,
    javascript,
    salesforce,
    sass,
    google,
    golang,
    next,
    typescript,
    svelte,
    react,
    vite,
  ],
}
