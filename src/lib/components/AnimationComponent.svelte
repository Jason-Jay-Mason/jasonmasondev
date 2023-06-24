<script lang="ts">
	import { ServerSideAnimation, MartechAnimation, ClientSideAnimation } from "$lib/components"
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	const { animationComponent } = link || ""
</script>

{#if animationComponent === "ServerSideAnimation"}
	<ServerSideAnimation {link} />
{:else if animationComponent === "MartechAnimation"}
	<MartechAnimation {link} />
{:else if animationComponent === "ClientSideAnimation"}
	<ClientSideAnimation {link} />
{:else}
	<div>.</div>
{/if}
