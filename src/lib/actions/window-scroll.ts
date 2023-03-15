//This is an action that allows us listen to and us the windowscroll event
//TODO: find the type defenition for this dom node, regular HTMLelement doesnt seem to work here
export function windowScroll(node: any): object {
  //Event dispatcher function
  //We use requestAnimationFrame for a debounce effect so that we are not triggering the scroll events 
  //at the cost of performance 
  let timeout: DOMHighResTimeStamp
  const handleScroll = () => {
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }
    timeout = window.requestAnimationFrame(() => {
      node.dispatchEvent(new CustomEvent('windowscroll'));
    })
  };

  //Instantiating the listener 
  document.addEventListener('scroll', handleScroll, true);

  //Make sure we do cleanup when the component unmounts
  return {
    destroy() {
      document.removeEventListener('scroll', handleScroll, true);
    }
  };
}
