<script lang="ts">
	import type { Tag } from "$lib/types"
	import { CardGrid, TagSelect } from "$lib/components"

	export let data
	let selectedTags: Tag[]

	$: {
		console.log(data)
	}
</script>

<section id="blog">
	<div class="top">
		<div class="headline">
			<h1>Woh! Neat blog!</h1>
			<div class="mask">
				<img src="/lines.svg" alt="Stylized background" />
			</div>
		</div>
		<TagSelect bind:selected={selectedTags} tags={data.tags} />
	</div>
	<CardGrid posts={data.posts} />
</section>

<style lang="scss">
	@import "../../../lib/theme/breakpoints.scss";
	section {
		max-width: 450;
		margin: 0 auto;
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
			padding: var(--s-9) 0;
			.headline {
				position: relative;
				width: fit-content;
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
