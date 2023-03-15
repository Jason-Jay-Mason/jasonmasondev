<script lang="ts">
	export let main: string;
	export let sub: string;
</script>

<div class="headline">
	<div class="sub">
		<h3>{sub}</h3>
		<div class="mask">
			<img src="/pencil-bg.svg" alt="Stylized background" />
		</div>
	</div>

	<h4>{main}</h4>
</div>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	.headline {
		width: fit-content;
		text-align: center;
		margin: 0 auto;
		.sub {
			position: relative;
			width: 100%;
			h3 {
				font-size: calc(var(--text-lg) + 10px);
				color: var(--color-rock-200);
				font-family: var(--font-subheadline);
				position: relative;
				transform: rotate(-4deg);
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
					width: 600px;
					opacity: var(--opacity-pencilbg);
					object-fit: cover;
					margin: auto 0;
				}
			}
		}

		h4 {
			line-height: 100%;
			font-size: var(--text-xl);
			letter-spacing: 0.105em;
			color: var(--color-rock-100);
			font-family: var(--font-headline);
		}
	}
</style>
