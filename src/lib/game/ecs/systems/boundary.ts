import type { IWorld } from "bitecs";
import type { Entity, Globals } from "../../types";
import { addComponent } from "bitecs";
import { Utils as U, Query as Q, Component as C, Entity as E } from "../";
import { runInThisContext } from "vm";

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


    const verticleCollision = (topWallCollision || bottomWallCollision)
    const horizontalCollision = (leftWallCollision || rightWallCollistion)

    if (verticleCollision) {
      C.Velocity.y[eid] = -(C.Velocity.y[eid] / 2)
    }

    if (horizontalCollision) {
      C.Velocity.x[eid] = -(C.Velocity.x[eid] / 2)
    }
    const destroyPlayer = ((verticleCollision || horizontalCollision) && U.isPlayer(w, eid) && !g.config.player.godMode)
    if (destroyPlayer) {
      g.state.score = 0
      addComponent(w, C.Destroy, eid)
      E.createExplostion(w, g, eid)
    }


  }
}
