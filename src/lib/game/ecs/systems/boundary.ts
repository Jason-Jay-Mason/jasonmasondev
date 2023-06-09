import type { IWorld } from "bitecs";
import type { Entity, Globals } from "../../types";
import { addComponent } from "bitecs";
import { Utils as U, Query as Q, Component as C } from "../";

export function boundary(w: IWorld, g: Globals): void {
  const width = g.dom.container.clientWidth
  const height = g.dom.container.clientHeight

  const eids: Entity[] = Q.boundary(w)
  for (const eid of eids) {
    if (U.isLaser(w, eid)) {
      const outOfView = (
        C.Position.x[eid] <= 0 ||
        C.Position.x[eid] >= g.dom.canvas.clientWidth ||
        C.Position.y[eid] <= 0 ||
        C.Position.y[eid] >= g.dom.canvas.clientHeight
      )

      if (outOfView) {
        addComponent(w, C.Destroy, eid)
      }
    }

    const topWallCollision = (C.Position.y[eid] <= 0 + C.Size.p[eid] &&
      Math.sign(C.Velocity.y[eid]) === -1)
    const bottomWallCollision = (C.Position.y[eid] >= height - C.Size.p[eid] &&
      Math.sign(C.Velocity.y[eid]) === 1)
    const leftWallCollision = (C.Position.x[eid] <= C.Size.p[eid] &&
      Math.sign(C.Velocity.x[eid]) === -1)
    const rightWallCollistion = (C.Position.x[eid] >= width - C.Size.p[eid] &&
      Math.sign(C.Velocity.x[eid]) === 1)

    if (topWallCollision || bottomWallCollision) {
      C.Velocity.y[eid] = -(C.Velocity.y[eid] / 2)
    }

    if (leftWallCollision || rightWallCollistion) {
      C.Velocity.x[eid] = -(C.Velocity.x[eid] / 2)
    }
  }
}
