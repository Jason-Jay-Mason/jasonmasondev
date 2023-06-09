import { Not, defineQuery } from "bitecs";
import { Component as C } from './'

const player = defineQuery([C.Player])
const npc = defineQuery([C.Npc])
const enemies = defineQuery([C.Enemy])
const position = defineQuery([C.Position])
const controled = defineQuery([C.Controls])
const boundary = defineQuery([C.Velocity, Not(C.ExplosionParticle)])
const collides = defineQuery([C.Collides])
const cleanup = defineQuery([C.Spawn])
const movement = defineQuery([C.Position, C.Velocity])
const destroy = defineQuery([C.Destroy])

export default {
  player,
  enemies,
  position,
  controled,
  boundary,
  collides,
  cleanup,
  npc,
  movement,
  destroy,
}
