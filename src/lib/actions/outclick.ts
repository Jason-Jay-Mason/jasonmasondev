import type { Action } from 'svelte/action';

export const outclickaction: Action<HTMLElement> = (node: HTMLElement) => {
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (!node.contains(target)) {
      node.dispatchEvent(new CustomEvent('outclick'));
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    }
  };
}

