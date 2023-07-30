import type { Entity, Globals } from "../../types";
import { Component as C } from "../";
import { addComponent, IWorld } from "bitecs";

function hud(g: Globals, ctx: CanvasRenderingContext2D): void {
  ctx.translate(0, 0)
  ctx.fillStyle = 'grey'
  ctx.font = "25px serif";
  ctx.fillText(`Score ${g.state.score}`, 30, g.dom.container.clientHeight - 40)
  const high = `High ${g.state.highScore}`
  let textBox = ctx.measureText(high)
  ctx.fillText(high, g.dom.container.clientWidth - 40 - textBox.width, g.dom.container.clientHeight - 40)

  if (!g.state.highScore) {
    const controles = `Left: ${g.config.player.controls.left} Right: ${g.config.player.controls.right} Thrust: ${g.config.player.controls.thrust} Shoot: ${g.config.player.controls.shoot}`
    textBox = ctx.measureText(controles)
    ctx.fillText(controles, (g.dom.container.clientWidth / 2) - (textBox.width / 2), (g.dom.container.clientHeight / 2) - 40)
  }


  ctx.resetTransform()
}

function hitBox(e: Entity, ctx: CanvasRenderingContext2D): void {
  ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
  ctx.fillRect(-C.Collides.x[e] / 2, -C.Collides.y[e] / 2, C.Collides.x[e], C.Collides.y[e])
}

function laser(e: Entity, g: Globals, ctx: CanvasRenderingContext2D): void {
  ctx.translate(C.Position.x[e], C.Position.y[e])
  ctx.rotate(C.Position.r[e])
  const laserSprite = g.state.sprites.lasers[C.Laser.type[e]]
  ctx.drawImage(laserSprite, -(C.Size.w[e] / 2), -(C.Size.h[e] / 2), C.Size.w[e], C.Size.h[e])

  if (g.config.showHitBox!) {
    hitBox(e, ctx)
  }

  ctx.resetTransform()
}

function enemy(e: Entity, g: Globals, ctx: CanvasRenderingContext2D): void {
  ctx.translate(C.Position.x[e], C.Position.y[e])
  ctx.rotate(C.Position.r[e])
  const enemySprite = g.state.sprites.enemies[C.Enemy.type[e]]!
  ctx.drawImage(enemySprite, -(C.Size.w[e] / 2), -(C.Size.h[e] / 2), C.Size.w[e], C.Size.h[e])

  if (g.config.showHitBox) {
    hitBox(e, ctx)
  }

  ctx.resetTransform()
}


function player(e: Entity, g: Globals, ctx: CanvasRenderingContext2D): void {
  ctx.translate(C.Position.x[e], C.Position.y[e])
  ctx.rotate(C.Position.r[e])

  const isThrusting = C.Controls.thrust[e]
  if (isThrusting) {
    ctx.rotate(Math.PI / 2)

    const thrusterSprite = g.state.sprites.player?.thruster!
    const cropWidth = C.Sprite.w[e]
    const cropHeight = C.Sprite.h[e]

    ctx.drawImage(
      thrusterSprite,
      cropWidth * C.Sprite.ix[e],
      0,
      cropWidth,
      cropHeight,
      -17,
      10,
      cropWidth,
      cropHeight
    )

    const timeForNextIndex = g.state.frame > C.Sprite.lastUpdate[e] + C.Sprite.tickGap[e]
    if (timeForNextIndex) {
      C.Sprite.lastUpdate[e] = g.state.frame
      if (C.Sprite.ix[e] < C.Sprite.maxFrames[e] - 1) {
        C.Sprite.ix[e]++
      } else {
        C.Sprite.ix[e] = 2
      }
    }

    ctx.rotate(-Math.PI / 2)
  }

  const resetSpriteIndex = C.Sprite.ix[e] > 0 && !isThrusting
  if (resetSpriteIndex) {
    C.Sprite.ix[e] = 0
  }
  const shipSprite = g.state.sprites.player?.ship!
  ctx.drawImage(shipSprite, -(C.Size.w[e] / 2), -(C.Size.h[e] / 2), C.Size.w[e], C.Size.h[e])

  if (g.config.showHitBox!) {
    hitBox(e, ctx)
  }

  ctx.resetTransform()
}

function particle(e: Entity, g: Globals, w: IWorld, ctx: CanvasRenderingContext2D): void {
  let timeSinceSpawn = g.state.frame - C.Spawn.created[e]
  if (timeSinceSpawn > C.ExplosionParticle.lifeTime[e]) {
    addComponent(w, C.Destroy, e)
  } else {
    const color = `rgba(${C.Color.r[e]},${C.Color.g[e]},${C.Color.b[e]}, ${C.Color.a[e]})`
    ctx.fillStyle = color
    C.Color.a[e] = C.Color.a[e] - C.ExplosionParticle.fade[e]
    ctx.translate(C.Position.x[e], C.Position.y[e])
    ctx.rotate(C.Position.r[e])
    ctx.fillRect(-(C.Size.w[e] / 2), -(C.Size.h[e] / 2), C.Size.w[e], C.Size.h[e])
    ctx.resetTransform()
  }
}

export default {
  laser,
  enemy,
  particle,
  player,
  hud,
}
