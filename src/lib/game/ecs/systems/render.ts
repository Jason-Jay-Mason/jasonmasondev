import type { IWorld } from "bitecs";
import type { Globals, Entity } from "../../types";
import { Query as Q } from "../";
import Draw from './draw'


export function render(w: IWorld, g: Globals, ctx: CanvasRenderingContext2D): void {

  ctx.clearRect(0, 0, g.dom.container.clientWidth, g.dom.container.clientHeight)

  let eids: Entity[] = Q.player(w)
  if (eids.length) Draw.player(eids[0], g, ctx)

  eids = Q.enemies(w)
  if (eids.length) eids.forEach(eid => Draw.enemy(eid, g, ctx))

  eids = Q.lasers(w)
  if (eids.length) eids.forEach(eid => Draw.laser(eid, g, ctx))

  eids = Q.particles(w)
  if (eids.length) eids.forEach(eid => Draw.particle(eid, g, w, ctx))

  if (g.config.displayHud) Draw.hud(g, ctx)

}
