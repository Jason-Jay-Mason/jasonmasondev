<script lang="ts">
	import { ServerSideAnimation, MartechAnimation, ClientSideAnimation } from "$lib/components"
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	const animationComponent = link.animationComponent || ["ServerSideAnimation"]
</script>

{#if animationComponent[0] === "ServerSideAnimation"}
	<ServerSideAnimation {link} />
{:else if animationComponent[0] === "MartechAnimation"}
	<MartechAnimation {link} />
{:else if animationComponent[0] === "ClientSideAnimation"}
	<ClientSideAnimation {link} />
{:else}
	<div>.</div>
{/if}
