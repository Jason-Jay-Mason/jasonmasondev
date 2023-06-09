import type { RenderProps } from './types'
import { Game } from './index'

//Can be run directly into lifecycle methods like onMount or useEffect
export function render(r: RenderProps) {
  let frame: number
  r.dom.canvas.height = r.dom.container.offsetHeight
  r.dom.canvas.width = r.dom.container.clientWidth

  const game = Game.initialize(r)

  const loop = (frame: number) => {
    if (r.dom.wasResized) {
      r.dom.canvas.width = r.dom.container.clientWidth
      r.dom.canvas.height = r.dom.container.clientHeight
      r.dom.wasResized = false
    }
    game.update(frame)
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)

  return () => {
    cancelAnimationFrame(frame);
  };
}


export default {
  render
}
