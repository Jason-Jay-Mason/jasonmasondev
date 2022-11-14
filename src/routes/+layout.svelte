<!-- src/layout -->
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
	<link
		href="https://fonts.googleapis.com/css2?family=Pragati+Narrow:wght@400;700&family=Qwigley&display=swap"
		rel="stylesheet"
	/><meta name="robots" content="noindex" /><meta name="googlebot" content="noindex" />
</svelte:head>

<slot />

<style lang="scss" global>
	@import '../global.scss';

	body {
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		position: relative;
		height: 100%;
	}
	body {
		background-color: var(--color-bg-primary);
		z-index: 0;
	}
</style>
