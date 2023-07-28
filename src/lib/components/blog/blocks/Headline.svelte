<script>
	export let portableText
	$: console.log(portableText)
</script>

{#if portableText.value.style === "h2"}
	<div class="h2-container">
		<h2>
			<slot />
		</h2>
		<img src="/lines.svg" alt="" />
	</div>
{/if}

{#if portableText.value.style === "h3"}
	<h3 class="blah">
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
		color: var(--color-rock-100);
		font-family: var(--font-headline);
		line-height: 1.2;
		font-size: var(--text-md);
		padding: var(--s-10) 0 0 0;
		text-transform: uppercase;
		@include lg {
			font-size: var(--text-lg);
		}
	}

	.h2-container {
		position: relative;
		overflow: hidden;
		width: 100%;
		z-index: 1;
		margin: var(--s-11) 0 var(--s-6) 0;
		padding: var(--s-4) 0;
		h2 {
			text-transform: uppercase;
			position: relative;
			z-index: 4;
			color: var(--color-rock-100);
			font-family: var(--font-headline);
			line-height: 1.2;
			font-size: var(--text-lg);
			@include lg {
				font-size: var(--text-xl);
			}
		}
		img {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			width: 1000px;
			opacity: 0;
		}
	}
</style>
