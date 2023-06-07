<script lang="ts">
	import type { Cta } from '$lib/types';
	import Hero from '$lib/components/Hero.svelte';

	const cta: Cta = {
		isVideo: false,
		hrefOrSrc: '/',
		innerText: "Let's Talk"
	};
	const hook = 'This is a hook';
	const logo = '/cd-logo.svg';
</script>

<Hero {cta} {hook} {logo} />
