<script lang="ts">
	import { ServerSideAnimation } from "$lib/components"
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	const { animationComponent } = link || ""
</script>

{#if animationComponent === "ServerSideAnimation"}
	<ServerSideAnimation {link} />
{:else}
	<div>.</div>
{/if}
