import type { IWorld } from "bitecs"
import type { Entity, Globals } from "../../../types"
import { hasComponent } from "bitecs"
import { Component as C } from "../.."
import { Actions } from "."

function hasTarget(eid: Entity): boolean {
  return C.Npc.targetEid[eid] > 0
}

function maxSpeedReached(eid: Entity): boolean {
  return C.Npc.speed[eid] >= C.Npc.maxSpeed[eid]
}

function isAimingAt(eid: Entity, direction: number, padding: number): boolean {
  const lowerBound = (direction - padding + 2 * Math.PI) % (2 * Math.PI);
  const upperBound = (direction + padding) % (2 * Math.PI);
  const rotation = C.Position.r[eid]

  if (lowerBound > upperBound) {
    return rotation > lowerBound || rotation < upperBound;
  }

  return rotation > lowerBound && rotation < upperBound;
}

function isStationary(eid: Entity): boolean {
  const speed = Math.abs(C.Velocity.x[eid]) + Math.abs(C.Velocity.y[eid])
  if (speed < 1) return true
  return false
}

function isMovingTowardTarget(eid: Entity): boolean {
  Actions.updateTarget(eid)
  const padding = 0.5
  const vectorDirection = C.Npc.vectorDirection[eid]
  const targetDirection = C.Npc.targetDirection[eid]

  const lowerBound = (targetDirection - padding + 2 * Math.PI) % (2 * Math.PI);
  const upperBound = (targetDirection + padding) % (2 * Math.PI);

  if (lowerBound > upperBound) {
    return vectorDirection > lowerBound || vectorDirection < upperBound;
  }

  return vectorDirection > lowerBound && vectorDirection < upperBound;
}

function targetExpired(w: IWorld, eid: Entity): boolean {
  return !hasComponent(w, C.Position, C.Npc.targetEid[eid])
}

function targetWithinRange(eid: Entity): boolean {
  const distance = C.Npc.distanceToTarget[eid]
  const threshold = C.Npc.enemyRangeThreshold[eid]
  return 0 < distance && distance < threshold
}

function willCollideWithWall(g: Globals, eid: Entity): boolean {
  const threshold = C.Npc.wallTurnThreshold[eid]
  const containerYMin = 0
  const canvasWidth = g.dom.canvas.width
  const containerXMin = 0
  const canvasHeight = g.dom.canvas.height

  const posX = C.Position.x[eid]
  const posY = C.Position.y[eid]
  const velX = C.Velocity.x[eid]
  const velY = C.Velocity.y[eid]

  const topCollision = posY < containerYMin + threshold && velY < 0
  const bottomCollision = posY > canvasHeight - threshold && velY > 0
  const leftCollision = posX < containerXMin + threshold && velX < 0
  const rightCollision = posX > canvasWidth - threshold && velX > 0

  if (topCollision || bottomCollision || leftCollision || rightCollision) {
    return true
  }

  return false
}

function withinWallThreshold(g: Globals, eid: Entity): boolean {
  const threshold: number = C.Npc.wallTurnThreshold[eid]
  const containerYMin = 0
  const canvasWidth = g.dom.canvas.width
  const containerXMin = 0
  const canvasHeight = g.dom.canvas.height
  const posY = C.Position.y[eid]
  const posX = C.Position.x[eid]

  const withinTop = posY < containerYMin + threshold
  const withinBottom = posY > canvasHeight - threshold
  const withinLeft = posX < containerXMin + threshold
  const withinRight = posX > canvasWidth - threshold
  if (withinTop || withinBottom || withinLeft || withinRight) {
    return true
  }

  return false
}


export default {
  maxSpeedReached,
  isAimingAt,
  isStationary,
  isMovingTowardTarget,
  willCollideWithWall,
  withinWallThreshold,
  hasTarget,
  targetWithinRange,
  targetExpired,
}
