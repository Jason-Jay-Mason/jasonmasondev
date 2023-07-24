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

	.error {
		width: 100%;
		max-width: $lg;
		margin: 0 auto;
		height: clamp(400px, 40vh, 500px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 var(--s-7);
		h1 {
			color: var(--color-rock-100);
			font-family: var(--font-headline);
			font-size: var(--text-xl);
		}
		p {
			color: var(--color-rock-100);
			text-align: center;
			font-size: var(--text-md);
			padding-bottom: var(--s-9);
		}
	}
</style>
