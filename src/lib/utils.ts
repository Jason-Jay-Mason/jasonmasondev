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


