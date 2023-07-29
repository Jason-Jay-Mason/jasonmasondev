import type { Action } from 'svelte/action';

export const windowScroll: Action<HTMLElement> = (node) => {
  let timeout: DOMHighResTimeStamp
  const handleScroll = () => {
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }
    timeout = window.requestAnimationFrame(() => {
      node.dispatchEvent(new CustomEvent('windowscroll'))
    })
  }

  document.addEventListener('scroll', handleScroll, true)

  return {
    destroy() {
      document.removeEventListener('scroll', handleScroll, true)
    }
  }
}

