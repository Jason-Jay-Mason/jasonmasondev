//This is an action that allows us listen to and us the windowscroll event
//TODO find the type defenition for this dom node, regular HTMLelement doesnt seem to work here
export function windowScroll(node: any): object {
  //Event dispatcher function
  let timeout: DOMHighResTimeStamp
  const handleScroll = () => {
    if (timeout) {
      window.cancelAnimationFrame(timeout)
    }
    timeout = window.requestAnimationFrame(() => {
      node.dispatchEvent(new CustomEvent('windowscroll'));
    })
  };

  //instantiating the listener 
  document.addEventListener('scroll', handleScroll, true);

  //make sure we do cleanup when the component unmounts
  return {
    destroy() {
      document.removeEventListener('scroll', handleScroll, true);
    }
  };
}
