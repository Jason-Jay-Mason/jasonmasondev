import { writable } from 'svelte/store'

//I'm keeping the last company slug that the user visited so that we can direct them to the proper links
export const company = writable('')
