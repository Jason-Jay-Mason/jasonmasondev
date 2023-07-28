import type { IWorld } from "bitecs";
import type { Coordinate, Entity, Globals } from "../../types";
import { addComponent } from "bitecs";
import { Query as Q, Component as C, Utils as U, Entity as E } from "../";


export function collision(w: IWorld, g: Globals): void {
  const eids: Entity[] = Q.collides(w)
  for (const eid of eids) {
    const current: Coordinate = {
      x: C.Collides.xKey[eid],
      y: C.Collides.yKey[eid]
    }

    if (U.isEnemy(w, eid)) {
      const collisionIds: Entity[] = g.state.collision.getNearbyEnts(current, eid)
      const potentialCollisions = collisionIds.length
      if (potentialCollisions) {
        for (const cid of collisionIds) {
          if (U.isLaser(w, cid) && Helpers.isColliding(eid, cid)) {
            g.state.score += C.Enemy.scoreValue[eid]
            if (g.state.score > g.state.highScore) g.state.highScore = g.state.score
            g.state.collision.removeEnt({ x: C.Collides.xKey[cid], y: C.Collides.yKey[cid] }, cid)
            g.state.collision.removeEnt({ x: C.Collides.xKey[eid], y: C.Collides.yKey[eid] }, eid)
            addComponent(w, C.Destroy, eid)
            addComponent(w, C.Destroy, cid)
            E.createExplostion(w, g, eid)

            continue
          }

          if (U.isPlayer(w, cid) && Helpers.isColliding(eid, cid) && Helpers.collisionDelayReached(eid, g)) {
            if (g.config.player?.godMode) {
              C.Collides.frame[eid] = g.state.frame

              C.Velocity.x[cid] = -0.5 * C.Velocity.x[cid] + 0.5 * C.Velocity.x[eid];
              C.Velocity.y[cid] = -0.5 * C.Velocity.y[cid] + 0.5 * C.Velocity.y[eid];

              C.Velocity.x[eid] = -0.5 * C.Velocity.x[eid] - 0.5 * C.Velocity.x[cid];
              C.Velocity.y[eid] = -0.5 * C.Velocity.y[eid] - 0.5 * C.Velocity.y[cid];

              addComponent(w, C.Destroy, eid)
              E.createExplostion(w, g, eid)
              continue
            } else {
              g.state.score = 0
              C.Collides.frame[eid] = g.state.frame

              C.Velocity.x[cid] = -0.5 * C.Velocity.x[cid] + 0.5 * C.Velocity.x[eid];
              C.Velocity.y[cid] = -0.5 * C.Velocity.y[cid] + 0.5 * C.Velocity.y[eid];

              C.Velocity.x[eid] = -0.5 * C.Velocity.x[eid] - 0.5 * C.Velocity.x[cid];
              C.Velocity.y[eid] = -0.5 * C.Velocity.y[eid] - 0.5 * C.Velocity.y[cid];

              addComponent(w, C.Destroy, eid)
              addComponent(w, C.Destroy, cid)
              E.createExplostion(w, g, eid)
              E.createExplostion(w, g, cid)
              continue
            }
          }
        }
      }
    }

    const next: Coordinate = {
      x: C.Position.x[eid],
      y: C.Position.y[eid]
    }

    const memoizeKeys = g.state.collision.setEnt(current, next, eid)
    C.Collides.xKey[eid] = memoizeKeys.x
    C.Collides.yKey[eid] = memoizeKeys.y
  }
}

const Helpers = {
  collisionDelayReached,
  isColliding,
}

function collisionDelayReached(e: Entity, g: Globals): boolean {
  const collisionFrameDelay = 20
  return C.Collides.frame[e] + collisionFrameDelay < g.state.frame
}

function isColliding(e1: Entity, e2: Entity): boolean {
  const rotation1 = C.Position.r[e1]
  const rotation2 = C.Position.r[e2]

  const e1HitBoxWidth = Math.abs(
    C.Collides.x[e1] * Math.cos(rotation1) -
    C.Collides.y[e1] * Math.sin(rotation1)
  )

  const e1HitBoxHeight = Math.abs(
    C.Collides.x[e1] * Math.sin(rotation1) +
    C.Collides.y[e1] * Math.cos(rotation1)
  )
  const e2HitBoxWidth = Math.abs(
    C.Collides.x[e2] * Math.cos(rotation2) -
    C.Collides.y[e2] * Math.sin(rotation2)
  );
  const e2HitBoxHeight = Math.abs(
    C.Collides.x[e2] * Math.sin(rotation2) +
    C.Collides.y[e2] * Math.cos(rotation2)
  );

  const e1MinX = C.Position.x[e1] - e1HitBoxWidth / 2;
  const e1MaxX = C.Position.x[e1] + e1HitBoxWidth / 2;
  const e1MinY = C.Position.y[e1] - e1HitBoxHeight / 2;
  const e1MaxY = C.Position.y[e1] + e1HitBoxHeight / 2;

  const e2MinX = C.Position.x[e2] - e2HitBoxWidth / 2;
  const e2MaxX = C.Position.x[e2] + e2HitBoxWidth / 2;
  const e2MinY = C.Position.y[e2] - e2HitBoxHeight / 2;
  const e2MaxY = C.Position.y[e2] + e2HitBoxHeight / 2;

  if (
    e1MaxX < e2MinX || // r1 is completely to the left of r2
    e1MinX > e2MaxX || // r1 is completely to the right of r2
    e1MaxY < e2MinY || // r1 is completely above r2
    e1MinY > e2MaxY    // r1 is completely below r2
  ) {
    return false;
  }

  return true;
}
