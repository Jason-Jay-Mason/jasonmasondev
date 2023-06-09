// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  namespace svelteHTML {
    //Add custom actions here
    interface HTMLAttributes<T> {
      'on:windowresize'?: (event: CustomEvent) => void
    }
  }
}

export { }
