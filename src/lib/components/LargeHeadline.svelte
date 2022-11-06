<script lang="ts">
	export let main: string;
	export let sub: string;
</script>

<div class="headline">
	<h3>{sub}</h3>
	<h4>{main}</h4>
</div>

<style lang="scss">
	.headline {
		margin: 0 auto;
		width: fit-content;
		text-align: center;
		h3 {
			font-size: calc(var(--text-lg) + 10px);
			color: var(--color-rock-200);
			font-family: var(--font-subheadline);
			position: relative;
			transform: rotate(-4deg);
			&::before {
				content: '';
				transform: rotate(4deg);
				height: 60%;
				width: 100%;
				z-index: -1;
				top: 20%;
				bottom: 0;
				left: 0;
				right: 0;
				position: absolute;
				opacity: var(--opacity-pencilbg);
				background-size: 300%;
				background-image: url('/pencil-bg.svg');
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
