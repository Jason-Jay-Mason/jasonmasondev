<script lang="ts">
	import type { Cta } from '$lib/types';
	import { Hero } from '$lib/components';

	const cta: Cta = {
		hrefOrSrc: '/',
		innerText: "LET'S TALK",
		isVideo: false
	};
	const hook =
		'Mustacheless web developer with a mustache as his logo. Let me help you knock out your next project. Click the button below and we’ll talk!';
	const logo = '/hero-logo.svg';
	const subHeadline = 'Developer - Creative';
</script>

<Hero {cta} {hook} {logo} {subHeadline} />
