<script lang="ts">
	import type { MarkComponentProps } from "@portabletext/svelte"
	enum marks {
		sub = "sub",
		sup = "sup",
		strong = "strong",
		em = "em",
		link = "link"
	}

	export let portableText: MarkComponentProps
	$: type = portableText.markType as marks
</script>

{#if type === marks.strong}
	<strong><slot /></strong>
{:else if type === marks.em}
	<em><slot /></em>
{:else if type === marks.sub}
	<sub><slot /></sub>
{:else if type === marks.sup}
	<sup><slot /></sup>
{:else if type === marks.link}
	<a href={portableText?.value?.href}><slot /></a>
	<!-- else if content here -->
{/if}

<style>
	a {
		color: var(--color-link);
	}
	a:hover {
		opacity: 0.9;
	}
</style>
