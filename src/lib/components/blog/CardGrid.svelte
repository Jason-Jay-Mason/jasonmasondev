<script lang="ts">
	import type { PostData } from "$lib/types"
	import Card from "./Card.svelte"
	import { Button } from "$lib/components"

	export let posts: PostData[]
</script>

{#if !posts.length}
	<div class="error">
		<h1>Sorry, there are no posts yet.</h1>
		<p>
			Although I plan on writing on this topic, there are not posts yet. Please check back later.
		</p>
		<Button href="/blog">Clear Filter</Button>
	</div>
{:else}
	<div class="post-grid">
		{#each posts as post}
			<Card {post} />
		{/each}
	</div>
{/if}

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.post-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--s-6);
		padding: var(--s-4) 0;
		margin: 0 auto;
		@include sm {
			grid-template-columns: 1fr 1fr;
			gap: var(--s-4);
		}
		@include md {
			gap: var(--s-6);
			max-width: 920px;
		}
		@include lg {
			grid-template-columns: 1fr 1fr 1fr;
			max-width: none;
		}
		@include xl {
			gap: var(--s-7);
		}
	}

	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: $lg;
		height: clamp(400px, 40vh, 500px);
		margin: 0 auto;
		padding: 0 var(--s-7);
		h1 {
			font-size: var(--text-xl);
			font-family: var(--font-headline);
			text-align: center;
			line-height: 1.2;
			color: var(--color-rock-100);
		}
		p {
			font-size: var(--text-md);
			text-align: center;
			color: var(--color-rock-100);
			padding-bottom: var(--s-9);
		}
	}
</style>
