<script lang="ts">
	import type { MarkComponentProps } from "@portabletext/svelte"
	enum marks {
		sub = "sub",
		sup = "sup",
		strong = "strong",
		em = "em"
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
{/if}
