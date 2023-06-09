import type { IWorld } from "bitecs";
import type { Entity, Globals } from "../../types";
import { Conditions, Actions } from './ai/'
import { Component as C, Query as Q } from "..";

export function npc(w: IWorld, g: Globals) {
  const [eid]: Entity[] = Q.npc(w)
  if (C.Npc.actionPending[eid] || g.state.frame < 9000) {
    return
  }

  switch (true) {
    case !Conditions.hasTarget(eid) || Conditions.targetExpired(w, eid):
      Actions.setNearestTarget(w, eid)
      break
    case Conditions.willCollideWithWall(g, eid):
      Actions.avoidWall(w, g, eid)
      break
    case Conditions.targetWithinRange(eid):
      Actions.eliminateTarget(w, g, eid)
      break
    case !Conditions.isStationary(eid) && !Conditions.isMovingTowardTarget(eid):
      Actions.cancelVelocity(w, g, eid)
      break
    default:
      Actions.huntEnemy(w, g, eid)
  }
}


