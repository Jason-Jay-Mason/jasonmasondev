import type {
  Entity,
  CollisionGrid,
  Grid,
  Coordinate,
  Config,
  Sprites,
  Frame,
  GameObj,
  Globals,
  RenderProps,
} from './types'
import { SpawnQuadrant } from './types'
import type { IWorld } from 'bitecs'
import { createWorld } from 'bitecs'
import { Utils as U, System as S } from './ecs'


function initialize(r: RenderProps): GameObj {
  const w: IWorld = createWorld()
  const g: Globals = Helpers.buildGlobalState(r)

  const ctx = r.dom.canvas.getContext('2d', {
    desynchronized: true,
  })
  if (ctx == null) throw "Canvas context is null, make sure the render func is receiving a canvas element."

  const update = (f: Frame) => {
    g.state.frame = f
    S.spawn(w, g)
    S.collision(w, g)
    S.npc(w, g)
    S.controls(w, g)
    S.boundary(w, g)
    S.movement(w)
    S.render(w, g, ctx)
  }

  return {
    update,
    globals: g
  }
}

export default {
  initialize
}

const Helpers = {
  buildGlobalState,
}

function buildGlobalState(r: RenderProps): Globals {
  const sprites = getSprites(r.config)
  const collisionGridSpacing = 150
  return {
    dom: r.dom,
    config: r.config,
    state: {
      score: 0,
      frame: 0,
      collision: createCollisionGrid(r.dom.container, collisionGridSpacing),
      sprites,
      spawn: {
        last: 0,
        timeGap: 2000,
        quadrant: SpawnQuadrant.topr,
        maxEnemies: r.config.maxEnemies || 15,
        minEnemies: r.config.minEnemies || 5,
        spawning: true,
        type: 0,
      },
    }
  }
}

function getSprites(c: Config): Sprites {
  const enemySprites = c.enemies.map(enemy => {
    const img = new Image()
    img.src = enemy.imgPath
    return img
  })

  const laserSprites = c.lasers.map(laser => {
    const img = new Image()
    img.src = laser
    return img
  })

  let ship = new Image()
  let thruster = new Image()
  ship.src = c.player.shipPath
  thruster.src = c.player.thrusterPath

  return {
    enemies: enemySprites,
    lasers: laserSprites,
    player: {
      ship,
      thruster
    }
  }

}

function createCollisionGrid(container: HTMLElement, cellSpacing: number): CollisionGrid {
  let grid: Grid = {
    x: {},
    y: {}
  }

  const xMax = container.clientWidth
  const yMax = container.clientHeight

  let x = 0
  let y = 0
  while (x < xMax || y < yMax) {
    grid.x[x] = U.createSparseSet()
    grid.y[y] = U.createSparseSet()
    x += cellSpacing
    y += cellSpacing
  }

  const setEnt = (last: Coordinate, next: Coordinate, e: Entity): Coordinate => {
    const nextKeys: Coordinate = {
      x: next.x - (next.x % cellSpacing),
      y: next.y - (next.y % cellSpacing)
    }

    const coordinateKeyExists = grid.x[nextKeys.x] && grid.y[nextKeys.y]
    if (!coordinateKeyExists) {
      return nextKeys
    }

    grid.x[last.x].remove(e)
    grid.y[last.y].remove(e)

    grid.x[nextKeys.x].add(e)
    grid.y[nextKeys.y].add(e)

    return nextKeys
  }

  const getNearbyEnts = (c: Coordinate, e: Entity): Entity[] => {
    const noEnemiesNearby = grid.x[c.x]?.dense?.length <= 1 || grid.y[c.y]?.dense?.length <= 1
    if (noEnemiesNearby) {
      return []
    }

    const nearbyEnts = grid.x[c.x].dense.filter((eid) => {
      if (eid === e || !grid.y[c.y].has(eid)) {
        return false
      }
      return true
    })


    return nearbyEnts
  }

  const removeEnt = (c: Coordinate, e: Entity): void => {
    grid.x[c.x].remove(e)
    grid.y[c.y].remove(e)
  }

  return {
    grid,
    lastUpdate: 0,
    setEnt,
    getNearbyEnts,
    removeEnt,
  }
}







