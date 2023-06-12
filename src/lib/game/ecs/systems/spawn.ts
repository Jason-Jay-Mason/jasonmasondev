import type { IWorld } from "bitecs";
import type { Controls, Entity, Globals, SpawnLocation } from "../../types";
import { SpawnQuadrant } from "../../types";
import { removeEntity } from "bitecs";
import { Component as C, Entity as E, Utils as U, Query as Q } from "../";

export function spawn(w: IWorld, g: Globals): void {
  const destroyedEids = Q.destroy(w)
  for (const eid of destroyedEids) {
    U.recycleEntity(w, eid)
    removeEntity(w, eid)
  }

  const playerConfigExists = g.config.player
  const npc = g.config.npc
  if (playerConfigExists && !npc) {
    const playerPresent = Q.player(w).length > 0
    if (!playerPresent) {
      const eid: Entity = E.createPlayer(w, g)
      Helpers.mountControls(g.config?.player?.controls!, eid)
    }
  }

  if (npc) {
    const npcPresent = Q.npc(w).length > 0
    if (!npcPresent) {
      E.createNpc(w, g)
    }
  }

  const enemyCount = Q.enemies(w).length
  if (enemyCount <= g.state.spawn.minEnemies) g.state.spawn.spawning = true

  const nextSpawnFrame = g.state.spawn.last + g.state.spawn.timeGap
  if (g.state.spawn.spawning && nextSpawnFrame < g.state.frame) {
    const l: SpawnLocation = Helpers.getSpawnLocation(g.dom.canvas, g.state.spawn.quadrant)

    E.createEnemy(w, g, g.state.spawn.type, l)

    const resetEnemyTypeIndex = g.state.spawn.type === g.config.enemies.length - 1
    resetEnemyTypeIndex ? g.state.spawn.type = 0 : g.state.spawn.type++

    const resetQuadrantIndex = (Object.keys(SpawnQuadrant).length / 2) - 1 === g.state.spawn.quadrant
    resetQuadrantIndex ? g.state.spawn.quadrant = 0 : g.state.spawn.quadrant++

    g.state.spawn.last = g.state.frame

    if (enemyCount + 1 === g.state.spawn.maxEnemies) g.state.spawn.spawning = false
  }

}

const Helpers = {
  mountControls,
  getSpawnLocation
}

function getSpawnLocation(c: HTMLCanvasElement, q: SpawnQuadrant): SpawnLocation {
  const velMin = 0.5
  const velMax = 1.5

  switch (q) {
    case SpawnQuadrant.topl:
      return {
        position: {
          x: 0,
          y: U.getBoundedRandom(0, c.height * (1 / 3))
        },
        velocity: {
          x: U.getBoundedRandom(velMin, velMax),
          y: U.getBoundedRandom(velMin, velMax)
        }
      }
    case SpawnQuadrant.bottoml:
      return {
        position: {
          x: 0,
          y: U.getBoundedRandom(c.height * (2 / 3), c.height)
        },
        velocity: {
          x: U.getBoundedRandom(velMin, velMax),
          y: U.getBoundedRandom(-velMin, -velMax)
        }
      }
    case SpawnQuadrant.topr:
      return {
        position: {
          x: c.width,
          y: U.getBoundedRandom(0, c.height * (1 / 3))
        },
        velocity: {
          x: U.getBoundedRandom(-velMin, -velMax),
          y: U.getBoundedRandom(velMin, velMax)
        }
      }
    case SpawnQuadrant.bottomr:
      return {
        position: {
          x: c.width,
          y: U.getBoundedRandom(c.height * (2 / 3), c.height)
        },
        velocity: {
          x: U.getBoundedRandom(-velMin, -velMax),
          y: U.getBoundedRandom(-velMin, -velMax)
        }
      }
  }

}
function mountControls(c: Controls, eid: Entity): void {
  window.onkeydown = (e) => {
    switch (e.key) {
      case c.left:
        C.Controls.left[eid] = 1
        break
      case c.shoot:
        C.Controls.action[eid] = 1
        break
      case c.thrust:
        C.Controls.thrust[eid] = 1
        break
      case c.right:
        C.Controls.right[eid] = 1
        break
    }
  }

  window.onkeyup = (e) => {
    switch (e.key) {
      case c.left:
        C.Controls.left[eid] = 0
        break
      case c.shoot:
        C.Controls.action[eid] = 0
        break
      case c.thrust:
        C.Controls.thrust[eid] = 0
        break
      case c.right:
        C.Controls.right[eid] = 0
        break
    }
  }
}
