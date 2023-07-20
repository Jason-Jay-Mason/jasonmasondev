<script lang="ts">
	import type { GridLinkData } from "$lib/types"

	export let headline: string
	export let hook: string
</script>

<div class="gridlink rainbow-hover">
	<div class="frame">
		<div class="mask">
			<img class="background" src="/pencil-bg.svg" alt="Stylized background" />
		</div>
		<div class="animation">
			<slot />
		</div>
	</div>
	<div class="container">
		<h3>{headline}</h3>
		<p>{hook}</p>
	</div>
</div>

<style lang="scss">
	@import "../theme/breakpoints.scss";
	.gridlink {
		z-index: 10;
		position: relative;
		margin: 0 auto;
		border: 4px solid var(--color-rock-100);
		width: 100%;
		h3 {
			color: var(--color-rock-100);
			font-family: var(--font-headline);
			font-size: 2em;
			padding-bottom: var(--s-5);
			line-height: 100%;
			letter-spacing: 0.2rem;
			text-transform: uppercase;
		}
		&:hover {
			border: 4px solid var(--color-rock-100);
			h3 {
				color: var(--color-rock-100);
			}
		}
		.frame {
			position: relative;
			display: flex;
			height: 296px;
			align-items: center;
			justify-content: center;
			.animation {
				height: 100%;
				width: 100%;
				z-index: 10;
			}
			.mask {
				z-index: 0;
				background-color: var(--color-bg-card);
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				overflow: hidden;
				.background {
					top: 0;
					position: absolute;
					width: 600px;
					height: 100%;
					object-fit: cover;
					opacity: var(--opacity-pencilbg);
				}
			}
		}
		.container {
			background-color: var(--color-bg-card);
			padding: var(--s-6) var(--s-7);
			@include sm {
				padding: var(--s-7) var(--s-8);
			}
			p {
				font-size: 12px;
				padding-bottom: var(--s-2);
			}
		}
	}
</style>
