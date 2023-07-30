<script lang="ts">
	import type { LegalData } from "$lib/types"
	import { TextBlock } from "$lib/components"

	export let data: LegalData
</script>

<section>
	<h1>{data.title}</h1>
	<TextBlock value={data.body} />
</section>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	section {
		max-width: $md;
		margin: 0 auto;
		padding: var(--s-12) var(--s-6) var(--s-10) var(--s-6);
		h1 {
			font-size: var(--text-xl);
			font-family: var(--font-headline);
			text-transform: uppercase;
			color: var(--color-rock-100);
		}
	}
</style>
