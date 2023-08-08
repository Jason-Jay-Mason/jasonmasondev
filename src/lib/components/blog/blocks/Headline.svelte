<script>
	export let portableText
</script>

{#if portableText.value.style === "h2"}
	<div class="h2-container">
		<h2>
			<slot />
		</h2>
		<img src="/lines.svg" alt="Background line design" />
	</div>
{/if}

{#if portableText.value.style === "h3"}
	<h3>
		<slot />
	</h3>
{/if}

{#if portableText.value.style === "h4"}
	<h4>
		<slot />
	</h4>
{/if}

<style lang="scss">
	@import "../../../theme/breakpoints.scss";
	h3,
	h4 {
		position: relative;
		font-size: var(--text-md);
		line-height: 1.2;
		font-family: var(--font-headline);
		text-transform: uppercase;
		color: var(--color-rock-100);
		padding: var(--s-10) 0 0 0;
		@include lg {
			font-size: var(--text-lg);
		}
	}
	.h2-container {
		z-index: 1;
		position: relative;
		width: 100%;
		overflow: hidden;
		margin: var(--s-11) 0 var(--s-6) 0;
		padding: var(--s-4) 0;
		h2 {
			z-index: 4;
			position: relative;
			line-height: 1.2;
			font-size: var(--text-lg);
			text-transform: uppercase;
			font-family: var(--font-headline);
			color: var(--color-rock-100);
			@include lg {
				font-size: var(--text-lg);
			}
		}
		img {
			z-index: 1;
			position: absolute;
			top: 0;
			left: 0;
			width: 1000px;
			opacity: 0;
		}
	}
</style>
