import type { IWorld } from "bitecs";
import type { Entity, Globals } from "../../../types";
import { Component as C, Query as Q, Utils as U } from "../../";
import { Conditions } from ".";



const cancelVelocity = createAsyncAction(async (untilTrue, eid, g) => {

  await untilTrue(() => {
    updateNpc(eid)

    const oppositeDirection = U.normalizeAngle(C.Npc.vectorDirection[eid] + Math.PI)
    if (Conditions.isAimingAt(eid, oppositeDirection, 0.4)) {
      C.Controls.right[eid] = 0
      C.Controls.left[eid] = 0
      C.Controls.thrust[eid] = 1
    } else {
      C.Controls.thrust[eid] = 0
      Helpers.turnEntity(eid, oppositeDirection)
    }

    const breakConditions = (
      Conditions.isMovingTowardTarget(eid) ||
      Conditions.isStationary(eid) ||
      Conditions.willCollideWithWall(g, eid)
    )
    if (breakConditions) {
      C.Controls.left[eid] = 0
      C.Controls.right[eid] = 0
      C.Controls.thrust[eid] = 0
      return true
    }
  }, 100)

})

const huntEnemy = createAsyncAction(async (untilTrue, eid, g, w) => {

  await untilTrue(() => {
    setNearestTarget(w, eid)
    updateNpc(eid)

    const targetDirection = C.Npc.targetDirection[eid]
    const isAimingAtEnemy = Conditions.isAimingAt(eid, targetDirection, 0.5)
    if (!isAimingAtEnemy) {
      Helpers.turnEntity(eid, targetDirection)
    }
    if (!Conditions.maxSpeedReached(eid) && isAimingAtEnemy) {
      C.Controls.right[eid] = 0
      C.Controls.left[eid] = 0
      C.Controls.thrust[eid] = 1
    } else {
      C.Controls.thrust[eid] = 0
    }

    const breakConditions = (
      Conditions.targetWithinRange(eid) ||
      Conditions.willCollideWithWall(g, eid) ||
      Conditions.maxSpeedReached(eid) &&
      !Conditions.isMovingTowardTarget(eid)
    )
    if (breakConditions) {
      C.Controls.thrust[eid] = 0
      C.Controls.right[eid] = 0
      C.Controls.left[eid] = 0
      return true
    }

  }, 100)

})



const eliminateTarget = createAsyncAction(async (untilTrue, eid, g, w) => {

  await untilTrue(() => {
    updateTarget(eid)
    const enemyDirection = C.Npc.targetDirection[eid]

    if (Conditions.isAimingAt(eid, enemyDirection, 0.8)) {
      C.Controls.action[eid] = 1
    } else {
      C.Controls.action[eid] = 0
    }

    if (!Conditions.isAimingAt(eid, enemyDirection, 0.15)) {
      Helpers.turnEntity(eid, enemyDirection)
    } else {
      C.Controls.left[eid] = 0
      C.Controls.right[eid] = 0
    }

    const breakConditions = (
      Conditions.willCollideWithWall(g, eid) ||
      Conditions.targetExpired(w, eid) ||
      !Conditions.targetWithinRange(eid)
    )
    if (breakConditions) {
      C.Controls.action[eid] = 0
      C.Controls.left[eid] = 0
      C.Controls.right[eid] = 0
      return true
    }

  }, 100)

})

const avoidWall = createAsyncAction(async (untilTrue, eid, g) => {
  const direction = Helpers.getVectorDirection(eid)
  const oppositeDirection = Math.floor(U.normalizeAngle(direction + Math.PI) * 100) / 100

  Helpers.turnEntity(eid, oppositeDirection)
  await untilTrue((tick) => {
    if (Conditions.isAimingAt(eid, oppositeDirection, 0.5) || tick > 10) {
      return true
    }
  })

  C.Controls.right[eid] = 0
  C.Controls.left[eid] = 0
  C.Controls.thrust[eid] = 1

  await untilTrue((tick) => {
    const breakConditions = (
      !Conditions.willCollideWithWall(g, eid) ||
      tick > 5
    )
    if (breakConditions) {
      C.Controls.thrust[eid] = 0
      return true
    }
  })

  updateNpc(eid)
  updateTarget(eid)

})

function updateNpc(eid: Entity) {
  C.Npc.vectorDirection[eid] = Helpers.getVectorDirection(eid)
  C.Npc.speed[eid] = Math.abs(C.Velocity.x[eid]) + Math.abs(C.Velocity.y[eid])
}

function updateTarget(eid: Entity) {
  C.Npc.distanceToTarget[eid] = Helpers.getEntDistance(eid, C.Npc.targetEid[eid])
  C.Npc.targetDirection[eid] = Helpers.getTargetDirection(eid, C.Npc.targetEid[eid])
}

function setNearestTarget(w: IWorld, eid: Entity) {
  const enemyEids = Q.enemies(w)
  if (!enemyEids.length) return

  let closestDistance: number = Infinity
  let closestEid: Entity = -1
  for (const target of enemyEids) {
    const distance = getEntDistance(eid, target)

    if (!closestDistance) {
      closestDistance = distance
      closestEid = target
    }

    if (distance < closestDistance) {
      closestDistance = distance
      closestEid = target
    }
  }

  C.Npc.targetEid[eid] = closestEid
  C.Npc.distanceToTarget[eid] = closestDistance
  C.Npc.targetDirection[eid] = Helpers.getTargetDirection(eid, closestEid)
}

export default {
  cancelVelocity,
  huntEnemy,
  avoidWall,
  setNearestTarget,
  eliminateTarget,
  updateTarget
}


type ConditionFunc = (time: number) => boolean | void
type LoopUntilTrueFunc = (condition: ConditionFunc, tickGap?: number) => Promise<void>
type Action = (loopUntilTrue: LoopUntilTrueFunc, eid: Entity, g: Globals, w: IWorld) => Promise<void>
type ActionFunc = (w: IWorld, g: Globals, eid: Entity) => Promise<void>

function createAsyncAction(action: Action): ActionFunc {

  const loopUntilTrue: LoopUntilTrueFunc = async (condition: ConditionFunc, tickGap?: number): Promise<void> => {
    let tick = 0
    while (!condition(tick)) {
      tick++
      await new Promise(resolve => setTimeout(resolve, tickGap || 100))
    }
  }

  return async function(w: IWorld, g: Globals, eid: Entity): Promise<void> {
    C.Npc.actionPending[eid] = 1
    await action(loopUntilTrue, eid, g, w)
    C.Npc.actionPending[eid] = 0
  }
}


const Helpers = {
  getEntDistance,
  getClosestTarget,
  getVectorDirection,
  getTargetDirection,
  turnEntity,
}


function turnEntity(eid: Entity, direction: number): void {

  const clockwiseDistance = U.normalizeAngle(direction - C.Position.r[eid])
  const counterClockwiseDistance = U.normalizeAngle(C.Position.r[eid] - direction)

  if (clockwiseDistance < counterClockwiseDistance) {
    C.Controls.right[eid] = 1
    C.Controls.left[eid] = 0
  } else {
    C.Controls.right[eid] = 0
    C.Controls.left[eid] = 1
  }
}

function getVectorDirection(eid: Entity): number {
  const angle = Math.atan2(C.Velocity.y[eid], C.Velocity.x[eid])
  return U.normalizeAngle(angle)
}

function getTargetDirection(eid: Entity, targetEid: Entity): number {
  const dx = C.Position.x[targetEid] - C.Position.x[eid];
  const dy = C.Position.y[targetEid] - C.Position.y[eid];

  const angle = Math.atan2(dy, dx);
  return U.normalizeAngle(angle)
}

function getEntDistance(e1: Entity, e2: Entity): number {
  return Math.hypot(C.Position.x[e1] - C.Position.x[e2], C.Position.y[e1] - C.Position.y[e2])
}


function getClosestTarget(eid: Entity, targetEids: Entity[]): [Entity, number] {
  let closestDistance: number = Infinity
  let closestEid: Entity = -1
  for (const target of targetEids) {
    const distance = getEntDistance(eid, target)

    if (!closestDistance) {
      closestDistance = distance
      closestEid = target
    }

    if (distance < closestDistance) {
      closestDistance = distance
      closestEid = target
    }
  }

  return [closestEid, closestDistance]
}
