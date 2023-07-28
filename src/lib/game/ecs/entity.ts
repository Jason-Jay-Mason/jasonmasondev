import type { EnemyType, Entity, Globals, RGBA, SpawnLocation } from '../types';
import type { Component, IWorld } from 'bitecs';
import { addComponent, addEntity } from 'bitecs';
import { Utils as U, Component as C } from '.';


function createExplostion(w: IWorld, g: Globals, sourceEid: Entity): void {
  let particles = 70
  while (particles > 0) {
    createExplostionParticle(w, g, sourceEid)
    particles--
  }
}

function createExplostionParticle(w: IWorld, g: Globals, sourceEid: Entity): void {
  const eid = addEntity(w)
  let components = [
    C.ExplosionParticle,
    C.Size,
    C.Position,
    C.Velocity,
    C.Acceleration,
    C.Color,
    C.Spawn
  ]

  Helpers.addComponents(w, eid, components)


  C.ExplosionParticle.lifeTime[eid] = 1000
  C.ExplosionParticle.fade[eid] = U.getBoundedRandom(8, 9) * 0.002

  C.Position.x[eid] = C.Position.x[sourceEid] + U.getBoundedRandom(5, 10)
  C.Position.y[eid] = C.Position.y[sourceEid] + U.getBoundedRandom(5, 10)
  C.Position.r[eid] = Math.random() * Math.PI

  const velocityBound = 6
  C.Velocity.x[eid] = U.getBoundedRandom(-velocityBound, velocityBound)
  C.Velocity.y[eid] = U.getBoundedRandom(-velocityBound, velocityBound)

  C.Spawn.created[eid] = g.state.frame

  const isSourceParticle = Math.random() < 0.5
  if (isSourceParticle) {
    C.Size.w[eid] = U.getBoundedRandom(2, 9)
    C.Size.h[eid] = U.getBoundedRandom(5, 12)
    const c: RGBA = Helpers.getRandomEnemyColor(g, sourceEid)
    for (const prop in c) {
      C.Color[prop as keyof typeof C.Color][eid] = c[prop as keyof RGBA]
    }
  } else {
    let isWhite = Math.random() > 0.5
    if (isWhite) {
      C.Size.w[eid] = U.getBoundedRandom(3, 4)
      C.Size.h[eid] = U.getBoundedRandom(3, 5)
      C.Color.r[eid] = 255
      C.Color.g[eid] = 255
      C.Color.b[eid] = 255
      C.Color.a[eid] = 1
    } else {
      C.Size.w[eid] = U.getBoundedRandom(3, 4)
      C.Size.h[eid] = U.getBoundedRandom(3, 5)
      C.Color.r[eid] = 61
      C.Color.g[eid] = 56
      C.Color.b[eid] = 52
      C.Color.a[eid] = 1
    }

  }
}


function createEnemy(w: IWorld, g: Globals, t: EnemyType, s: SpawnLocation): void {
  const eid = addEntity(w)
  let components = [
    C.Enemy,
    C.Size,
    C.Position,
    C.Velocity,
    C.Collides,
    C.Color,
    C.Spawn
  ]

  Helpers.addComponents(w, eid, components)

  C.Enemy.type[eid] = t
  C.Enemy.scoreValue[eid] = 10

  const width = g.config.enemies[t].size.w
  const height = g.config.enemies[t].size.h
  C.Size.w[eid] = width
  C.Size.h[eid] = height
  C.Size.p[eid] = 20

  C.Position.x[eid] = s.position.x
  C.Position.y[eid] = s.position.y

  C.Collides.x[eid] = width - 18
  C.Collides.y[eid] = height - 10

  const rotatingLeft = Math.random() > 0.5
  const minRotation = 0.003
  const maxRotation = 0.04
  C.Velocity.a[eid] = rotatingLeft ? U.getBoundedRandom(minRotation, maxRotation, 3) : U.getBoundedRandom(minRotation, maxRotation, 3)
  C.Velocity.x[eid] = s.velocity.x
  C.Velocity.y[eid] = s.velocity.y

  C.Spawn.created[eid] = g.state.frame

}

function createLaser(w: IWorld, g: Globals, shooterId: Entity): void {
  const eid = addEntity(w)
  let components = [
    C.Laser,
    C.Size,
    C.Position,
    C.Velocity,
    C.Collides,
    C.Spawn
  ]

  Helpers.addComponents(w, eid, components)

  C.Laser.type[eid] = U.getBoundedRandom(0, g.state.sprites.lasers.length, 0)

  C.Size.w[eid] = 25
  C.Size.h[eid] = 25

  C.Position.x[eid] = C.Position.x[shooterId] + Math.cos(C.Position.r[shooterId]) * 25
  C.Position.y[eid] = C.Position.y[shooterId] + Math.sin(C.Position.r[shooterId]) * 25
  C.Position.r[eid] = C.Position.r[shooterId]

  const laserSpeed = 5
  C.Velocity.x[eid] = Math.cos(C.Position.r[eid]) * laserSpeed + C.Velocity.x[shooterId]
  C.Velocity.y[eid] = Math.sin(C.Position.r[eid]) * laserSpeed + C.Velocity.y[shooterId]

  C.Collides.x[eid] = 25
  C.Collides.y[eid] = 25

  C.Spawn.created[eid] = g.state.frame
  C.Spawn.destroyed[eid] = 0
}

function createNpc(w: IWorld, g: Globals): Entity {
  const eid = addEntity(w)
  let components = [
    C.Npc,
    C.Player,
    C.Size,
    C.Position,
    C.Velocity,
    C.Controls,
    C.Collides,
    C.Weapon,
    C.Sprite,
  ]

  Helpers.addComponents(w, eid, components)

  C.Size.w[eid] = g.config.player?.size.w!
  C.Size.h[eid] = g.config.player?.size.h!
  C.Size.p[eid] = 15

  C.Position.x[eid] = g.config.player.position.x
  C.Position.y[eid] = g.config.player.position.y
  C.Position.r[eid] = (3 / 4) * 2 * Math.PI

  C.Velocity.maxa[eid] = 0.07

  C.Acceleration.xy[eid] = 0.09

  C.Npc.maxSpeed[eid] = 3
  C.Npc.wallTurnThreshold[eid] = 120
  C.Npc.enemyRangeThreshold[eid] = 220

  C.Sprite.w[eid] = 35
  C.Sprite.h[eid] = 45
  C.Sprite.tickGap[eid] = 150
  C.Sprite.maxFrames[eid] = 7

  C.Weapon.fireRate[eid] = g.config.player.fireRate

  return eid
}

function createPlayer(w: IWorld, g: Globals): Entity {
  const eid = addEntity(w)
  let components = [
    C.Player,
    C.Size,
    C.Position,
    C.Velocity,
    C.Controls,
    C.Collides,
    C.Weapon,
    C.Sprite,
  ]


  Helpers.addComponents(w, eid, components)

  const width = g.config.player?.size.w!
  const height = g.config.player?.size.h!
  C.Size.w[eid] = width
  C.Size.h[eid] = height
  C.Size.p[eid] = 15

  C.Position.x[eid] = g.config.player.position.x || window.innerWidth / 2
  C.Position.y[eid] = g.config.player.position.y || window.innerHeight / 2
  C.Position.r[eid] = (3 / 4) * 2 * Math.PI

  C.Acceleration.xy[eid] = 0.05

  C.Velocity.maxa[eid] = 0.09

  C.Sprite.tickGap[eid] = 150
  C.Sprite.w[eid] = 35
  C.Sprite.h[eid] = 45
  C.Sprite.maxFrames[eid] = 7

  C.Weapon.fireRate[eid] = g.config.player.fireRate

  C.Collides.x[eid] = width
  C.Collides.y[eid] = height

  return eid
}

export default {
  createPlayer,
  createEnemy,
  createExplostion,
  createLaser,
  createNpc,
}


const Helpers = {
  addComponents,
  getRandomEnemyColor,
}
function addComponents(w: IWorld, e: Entity, c: Component[]): void {
  for (const component of c) {
    addComponent(w, component, e)
  }
}

function getRandomEnemyColor(gl: Globals, e: Entity): RGBA {
  const randomIndex = Math.floor(U.getBoundedRandom(0, gl.config.enemies[C.Enemy.type[e]].colors.length))
  const r = gl.config.enemies[C.Enemy.type[e]].colors[randomIndex].r
  const g = gl.config.enemies[C.Enemy.type[e]].colors[randomIndex].g
  const b = gl.config.enemies[C.Enemy.type[e]].colors[randomIndex].b
  const a = gl.config.enemies[C.Enemy.type[e]].colors[randomIndex].a

  return {
    r,
    g,
    b,
    a,
  }
}
