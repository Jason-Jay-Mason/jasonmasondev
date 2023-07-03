export function getStyleValue(progress: number, start: number, length: number, startValue: number, endValue: number) {
  let animationProgress = (progress - start) / length

  if (animationProgress < 0) {
    return startValue
  }

  if (animationProgress > 1) {
    return endValue
  }
  let valueDistance = endValue - startValue
  return startValue + animationProgress * valueDistance
}

export function debounce(func: Function, delay: number): Function {
  let timeoutId: NodeJS.Timeout;

  return function(...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


import type { IterableGlob } from './types';

export async function fetchContent(contentFolderName: string) {

  let iterable: IterableGlob[] = []
  switch (contentFolderName) {
    case 'projects':
      iterable = Object.entries(import.meta.glob('/src/content/projects/*.json'))
      break
    case 'company-pages':
      iterable = Object.entries(import.meta.glob('/src/content/company-pages/*.json'))
      break
  }

  if (iterable.length) {
    //Resolve all promises to just one
    const content = await Promise.all(
      iterable.map(async ([path, resover]) => {
        let data = await resover()
        let slug = path.replaceAll(`/src/content/${contentFolderName}/`, '').replaceAll('.json', '')
        return {
          slug,
          data
        }
      })
    )
    return content
  }
}


