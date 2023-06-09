import type { Entity, SparceSet } from '../types.ts'
import type { IWorld, Component } from 'bitecs'
import { getEntityComponents, removeComponent, hasComponent } from 'bitecs'
import { Component as C } from '.'

const isEnemy = (w: IWorld, e: Entity) => hasComponent(w, C.Enemy, e)
const isPlayer = (w: IWorld, e: Entity) => hasComponent(w, C.Player, e)
const isNpc = (w: IWorld, e: Entity) => hasComponent(w, C.Npc, e)
const isLaser = (w: IWorld, e: Entity) => hasComponent(w, C.Laser, e)
const isParticle = (w: IWorld, e: Entity) => hasComponent(w, C.ExplosionParticle, e)

const normalizeAngle = (r: number) => ((r % (2 * Math.PI)) + (2 * Math.PI)) % (2 * Math.PI)

function recycleEntity(w: IWorld, e: Entity): void {
  const components: Component[] = getEntityComponents(w, e)
  for (const component of components) {
    removeComponent(w, component, e)
  }
}

function getBoundedRandom(min: number, max: number, roundto?: number): number {
  if (roundto === undefined) {
    return Math.floor((Math.random() * (max - min) + min) * 100) / 100
  }
  if (roundto === 0) {
    return Math.floor((Math.random() * (max - min) + min))
  }

  const decimalPlace = Math.pow(10, roundto)
  return Math.floor((Math.random() * (max - min) + min) * decimalPlace) / decimalPlace
}

function createSparseSet(): SparceSet {
  let sparse: number[] = []
  const dense: number[] = []

  const has = (n: number): boolean => dense[sparse[n]] === n
  const add = (n: number): void => {
    if (has(n)) return
    sparse[n] = dense.push(n) - 1
  }
  const remove = (n: number): void => {
    if (!has(n)) return
    let i = sparse[n]
    let swap = dense.pop()

    if (swap !== n) {
      dense[i] = swap!
      sparse[swap!] = i
    }
  }
  const reset = (): void => {
    dense.length = 0
    sparse.length = 0
  }


  return {
    add,
    remove,
    has,
    reset,
    sparse,
    dense
  }
}

export default {
  isEnemy,
  isPlayer,
  isLaser,
  isParticle,
  getBoundedRandom,
  recycleEntity,
  isNpc,
  createSparseSet,
  normalizeAngle,
}


