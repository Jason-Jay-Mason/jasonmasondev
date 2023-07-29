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
		padding: var(--s-4);
		@include sm {
			max-width: $lg;
		}
		@include lg {
			max-width: 1400px;
			padding: var(--s-5) var(--s-5) var(--s-7) var(--s-5);
		}
		@include xl {
			padding: var(--s-6) var(--s-9) var(--s-12) var(--s-9);
		}
		.top {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: var(--s-9) 0;
			@include lg {
				justify-content: space-between;
			}
			.headline {
				position: relative;
				h1 {
					@keyframes headline {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(-724deg);
						}
					}
					font-size: var(--text-xl);
					font-family: var(--font-subheadline);
					color: var(--color-rock-100);
					padding: var(--s-4) var(--s-10) 0 var(--s-10);
					transform: rotate(-4deg);
					animation: headline 1.5s 1;
				}
				.mask {
					position: absolute;
					top: 0;
					bottom: 0;
					width: 100%;
					height: 60%;
					z-index: -1;
					margin: auto 0;
					overflow: hidden;
					img {
						position: absolute;
						top: 0;
						bottom: 0;
						left: 0;
						width: 1000px;
						margin: auto 0;
						object-fit: repeat;
						opacity: var(--opacity-pencilbg);
					}
				}
			}
		}
	}
</style>
