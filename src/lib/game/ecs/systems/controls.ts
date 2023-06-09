import type { IWorld } from "bitecs";
import type { Globals } from "../../types";
import { Query as Q, Component as C, Entity as E, Utils as U } from "../";

export function controls(w: IWorld, g: Globals): void {
  const eids = Q.controled(w)
  const { right, left, action, thrust } = C.Controls
  for (const eid of eids) {
    if (action[eid] && U.isPlayer(w, eid)) {
      const laserReady = C.Weapon.lastFire[eid] + C.Weapon.fireRate[eid] < g.state.frame
      if (laserReady) {
        E.createLaser(w, g, eid)
        C.Weapon.lastFire[eid] = g.state.frame
      }
    }

    if (right[eid]) C.Velocity.a[eid] = C.Velocity.maxa[eid]
    if (left[eid]) C.Velocity.a[eid] = -C.Velocity.maxa[eid]
    if (!right[eid] && !left[eid] || right[eid] && left[eid]) C.Velocity.a[eid] = 0

    if (thrust[eid]) {
      let beta = Math.pow(0.7, Math.abs(C.Velocity.y[eid] + C.Velocity.x[eid]))
      C.Velocity.x[eid] = C.Velocity.x[eid] + beta * (Math.cos(C.Position.r[eid]) * C.Acceleration.xy[eid])
      C.Velocity.y[eid] = C.Velocity.y[eid] + beta * (Math.sin(C.Position.r[eid]) * C.Acceleration.xy[eid])
    }
  }
}
