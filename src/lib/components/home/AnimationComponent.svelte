<script lang="ts">
	import type { GridLinkData } from "$lib/types"
	import { ServerSideAnimation, MartechAnimation, ClientSideAnimation } from "$lib/components"

	export let link: GridLinkData
	const animationComponent = link.animationComponent || ""
</script>

{#if animationComponent[0] === "ServerSideAnimation"}
	<ServerSideAnimation {link} />
{:else if animationComponent[0] === "MartechAnimation"}
	<MartechAnimation {link} />
{:else}
	<ClientSideAnimation {link} />
{/if}
