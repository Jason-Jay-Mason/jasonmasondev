import { IWorld } from "bitecs";
import { Component as C, Query as Q, Utils as U } from "..";

export function movement(w: IWorld): void {
  const eids = Q.movement(w)
  for (const eid of eids) {
    C.Position.y[eid] = C.Position.y[eid] + C.Velocity.y[eid]
    C.Position.x[eid] = C.Position.x[eid] + C.Velocity.x[eid]
    C.Position.r[eid] = U.normalizeAngle(C.Position.r[eid] + C.Velocity.a[eid])
  }
}
