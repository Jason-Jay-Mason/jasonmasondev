<script lang="ts">
	import type { Tag } from "$lib/types"
	import { TagSelect } from "$lib/components"

	export let tags: Tag[]
</script>

<div class="top">
	<div class="headline">
		<h1>Webdev blog</h1>
		<div class="mask">
			<img src="/lines.svg" alt="Stylized background" />
		</div>
	</div>
	<TagSelect {tags} />
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
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
				font-size: var(--text-xl);
				font-family: var(--font-subheadline);
				color: var(--color-rock-100);
				transform: rotate(-2deg);
				padding: var(--s-4) var(--s-10) 0 var(--s-10);
			}
			.mask {
				z-index: -1;
				position: absolute;
				top: 0;
				bottom: 0;
				width: 100%;
				height: 50%;
				margin: auto 0;
				overflow: hidden;
				img {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					width: 1000px;
					object-fit: repeat;
					margin: auto 0;
					opacity: var(--opacity-pencilbg);
				}
			}
		}
	}
</style>
