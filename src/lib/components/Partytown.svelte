<script lang="ts">
	import { partytownSnippet } from "@builder.io/partytown/integration"
	import { onMount } from "svelte"

	let snippet: HTMLScriptElement
	onMount(() => {
		snippet.innerText = partytownSnippet()
	})
</script>

<svelte:head>
	<script>
		partytown = {
			forward: ["dataLayer.push"]
		}
	</script>

	<script bind:this={snippet}></script>

	<slot />
</svelte:head>
