<script lang="ts">
	import type { Tag, Post } from "$lib/types"
	import { CardGrid, TagSelect } from "$lib/components"

	export let posts: Post[]
	export let tags: Tag[]
	export let selected: string | null
</script>

<section id="blog">
	<div class="top">
		<div class="headline">
			<h1>Woh! Neat blog!</h1>
			<div class="mask">
				<img src="/lines.svg" alt="Stylized background" />
			</div>
		</div>
		<TagSelect {tags} {selected} />
	</div>
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
		}
		@include xl {
			padding: 0 var(--s-9) var(--s-14) var(--s-9);
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
					padding: var(--s-4) var(--s-10) 0 var(--s-10);
					color: var(--color-rock-100);
					font-family: var(--font-subheadline);
					font-size: var(--text-xl);
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
						opacity: var(--opacity-pencilbg);
						object-fit: repeat;
						margin: auto 0;
					}
				}
			}
		}
	}
</style>
