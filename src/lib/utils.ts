
//Helper that gets a styles value
//Progress is the progress value from an AnmiationFrame component
//Start: the progress value that the animation will start n>0<1
//Length: the duration of the animation n>0<1
//startValue: The desired css properties start value
//endValue: The desired css properties end value
export function getStyleValue(progress: number, start: number, length: number, startValue: number, endValue: number) {
  let animationProgress = (progress - start) / length; // get the progress through this animation as a percentage
  //return the start value if we are not at the animation yet
  if (animationProgress < 0) {
    return startValue;
  }
  //return the end value if we are at the end of the animation
  if (animationProgress > 1) {
    return endValue;
  }
  let valueDistance = endValue - startValue; //get the difference in start and end value
  return startValue + animationProgress * valueDistance; //return the current value
}


//My main serverside function for fetching my content
// TODO: write a build script that generates the switch statement in the function automatically based on the content folders
import type { IterableGlob } from './types';

export async function fetchContent(contentFolderName: string) {
  //Vite function that globs a directory and returns {path}:{()=>import(...)}
  //I have to do a switch here because Vite glob can only take string literals 
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


//Function that passes the github auth token to decap cms
//this is a bit hacky as decap cms has no official documentation on 
//using any backend other than netlify
import type { AuthData } from './types';

export function createAuthResponse(status: string, content: AuthData) {
  //window.opener.postMessage passes a message from the Oauth popup to the client
  //decap cms listens for github authorization in the form bellow. Again,
  // this is kind of hacky because a lack of proper documentation on decap backends
  // but this project is low risk so we are okay
  return `
<script>
  const receiveMessage = (message) => {
    window.opener.postMessage(
      'authorization:github:${status}:${JSON.stringify(content)}',
      message.origin
    );
    window.removeEventListener("message", receiveMessage, false);
  }
  window.addEventListener("message", receiveMessage, false);
  
  window.opener.postMessage("authorizing:github", "*");
</script>
  `;
}
