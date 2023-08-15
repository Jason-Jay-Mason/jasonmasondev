<script lang="ts">
	import type { Tag, PostData } from "$lib/types"
	import { CardGrid } from "$lib/components"
	import TagSection from "./TagSection.svelte"

	export let posts: PostData[]
	export let tags: Tag[]
</script>

<section id="blog">
	<TagSection {tags} />
	<CardGrid {posts} />
</section>

<style lang="scss">
	@import "../../../lib/theme/breakpoints.scss";
	section {
		max-width: 450;
		margin: var(--s-11) auto 0 auto;
		padding: 0 var(--s-4);
		@include sm {
			max-width: $lg;
		}
		@include lg {
			max-width: 1400px;
			padding: var(--s-10) var(--s-5) var(--s-7) var(--s-5);
		}
		@include xl {
			padding: var(--s-10) var(--s-9) var(--s-12) var(--s-9);
		}
	}
</style>
