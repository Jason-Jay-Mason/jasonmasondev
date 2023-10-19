<script lang="ts">
	import type { GridLinkData } from "$lib/types"
	import { ServerSideAnimation, MartechAnimation, ClientSideAnimation } from "$lib/components"
	import type { ComponentType, SvelteComponentTyped } from "svelte"

	export let link: GridLinkData

	const animationComponent = link.animationComponent || ["ServerSideAnimation"]

	const componentMap: Record<string, ComponentType> = {
		ServerSideAnimation: ServerSideAnimation,
		MartechAnimation: MartechAnimation,
		ClientSideAnimation: ClientSideAnimation
	}

	const component: ComponentType<SvelteComponentTyped<{ link: GridLinkData }>> =
		componentMap[animationComponent[0]]
</script>

<svelte:component this={component} {link} />
