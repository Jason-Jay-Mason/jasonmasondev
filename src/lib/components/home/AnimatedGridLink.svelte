<script lang="ts">
	export let headline: string
	export let hook: string
</script>

<div class="gridlink rainbow-hover">
	<div class="frame">
		<div class="mask" />
		<div class="animation">
			<slot />
		</div>
	</div>
	<div class="container">
		<h2>{headline}</h2>
		<p>{hook}</p>
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.gridlink {
		position: relative;
		width: 100%;
		margin: 0 auto;
		border: 4px solid var(--color-rock-100);
		background-color: var(--color-bg-card);
		height: 100%;
		&:hover {
			border: 4px solid var(--color-rock-100);
			h3 {
				color: var(--color-rock-100);
			}
		}
		h2 {
			font-size: 2em;
			font-family: var(--font-headline);
			line-height: 100%;
			letter-spacing: 0.2rem;
			text-transform: uppercase;
			color: var(--color-rock-100);
			padding-bottom: var(--s-5);
		}
		.frame {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 296px;
			background-image: url("/lines.svg");
			background-size: 130%;
			background-repeat: repeat;
			background-color: var(--color-bg-card);
			.animation {
				z-index: 10;
				height: 100%;
				width: 100%;
			}
			.mask {
				z-index: 0;
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				overflow: hidden;
				background-color: var(--color-bg-pencil-overlay);
			}
		}
		.container {
			padding: var(--s-7) var(--s-7);
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
