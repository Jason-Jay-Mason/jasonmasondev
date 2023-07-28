export interface Dom {
  canvas: HTMLCanvasElement
  container: HTMLElement
}

export interface Config {
  player: InitPlayer
  npc: boolean
  lasers: string[]
  enemies: InitEnemy[]
  displayHud: boolean
  maxEnemies: number
  minEnemies: number
  showFps?: boolean
  showHitBox?: boolean
}

export interface RenderProps {
  dom: Dom
  config: Config
}

export interface Grid {
  x: CartesianMap
  y: CartesianMap
}

export interface Coordinate {
  x: number,
  y: number
}

interface PlayerSprite {
  ship: HTMLImageElement
  thruster: HTMLImageElement
}

export interface Sprites {
  enemies: HTMLImageElement[]
  lasers: HTMLImageElement[]
  player: PlayerSprite
}

export interface Globals {
  dom: Dom
  config: Config
  state: {
    score: number
    highScore: number
    frame: number
    collision: CollisionGrid
    sprites: Sprites
    spawn: {
      last: number
      timeGap: number
      minEnemies: number
      maxEnemies: number
      type: number
      spawning: boolean
      quadrant: SpawnQuadrant
    }
  }
}

export interface SpawnLocation {
  position: Coordinate
  velocity: Coordinate
}

export interface GameObj {
  globals: Globals
  update: UpdateFunc
}

export interface Controls {
  thrust: string
  left: string
  right: string
  shoot: string
}

interface Size {
  w: number,
  h: number
}

interface InitPlayer {
  shipPath: string
  thrusterPath: string
  controls: Controls
  godMode: boolean
  size: Size
  position: Coordinate
  fireRate: number
}

export interface RGBA {
  r: number,
  g: number,
  b: number,
  a: number,
}

export interface InitEnemy {
  imgPath: string
  colors: RGBA[]
  size: Size
}

export enum SpawnQuadrant {
  topr = 0,
  topl,
  bottomr,
  bottoml
}

export type SparceSet = {
  add: (n: number) => void
  remove: (n: number) => void
  has: (n: number) => boolean
  reset: () => void
  sparse: number[]
  dense: number[]
}

export type CartesianMap = {
  [key: number]: SparceSet
}

export type CollisionGrid = {
  grid: Grid
  lastUpdate: number
  setEnt: (last: Coordinate, next: Coordinate, e: Entity) => Coordinate
  getNearbyEnts: (c: Coordinate, e: Entity) => Entity[]
  removeEnt: (c: Coordinate, e: Entity) => void
  resetGrid: () => void
}

type UpdateFunc = (frame: number) => void
export type EnemyType = number
export type Entity = number
export type Frame = number













