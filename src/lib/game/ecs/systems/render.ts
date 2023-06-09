import type { IWorld } from "bitecs";
import type { Globals } from "../../types";
import { Query as Q, Utils as U } from "../";
import Draw from './draw'


export function render(w: IWorld, g: Globals, ctx: CanvasRenderingContext2D): void {

  ctx.clearRect(0, 0, g.dom.container.clientWidth, g.dom.container.clientHeight)

  const eids = Q.position(w)
  for (const eid of eids) {
    switch (true) {
      case U.isEnemy(w, eid):
        Draw.enemy(eid, g, ctx)
        break
      case U.isLaser(w, eid):
        Draw.laser(eid, g, ctx)
        break
      case U.isParticle(w, eid):
        Draw.particle(eid, g, ctx)
        break
      case U.isNpc(w, eid):
      case U.isPlayer(w, eid):
        Draw.player(eid, g, ctx)
        break
    }
  }
}
