<!-- src/layout
Global layout
TODO: Implement party town for page speed
-->
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
	//Import our global syle sheet here
	@import '../global.scss';

	//TODO: delete me if nothing breaks
	body {
		/* overflow-x: hidden; */
		/* -webkit-overflow-scrolling: touch; */
		/* height: 100%; */
		/* z-index: 0; */
		/* background-color: var(--color-bg-primary); */
	}
</style>
