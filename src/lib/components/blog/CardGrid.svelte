<script lang="ts">
	import type { Post } from "$lib/types"
	import Card from "./Card.svelte"

	export let posts: Post[]
</script>

<div class="post-grid">
	{#each posts as post}
		<Card {post} />
	{/each}
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.post-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-6);
		padding: var(--s-4) 0;
		margin: 0 auto;
		@include sm {
			gap: var(--s-4);
			grid-template-columns: 1fr 1fr;
		}
		@include md {
			max-width: 920px;
			gap: var(--s-6);
		}
		@include lg {
			grid-template-columns: 1fr 1fr 1fr;
			max-width: none;
		}
		@include xl {
			gap: var(--s-7);
		}
	}
</style>
