<!-- [company] the main company page -->
<script lang="ts">
	import Hero from '$lib/components/company/Hero.svelte';
	import CoverLetter from '$lib/components/company/CoverLetter.svelte';
	import Work from '$lib/components/Work.svelte';
	import type { LayoutData } from './$types';
	import { company } from '$lib/stores';
	import { onMount } from 'svelte';

	export let data: LayoutData;

	// setting the company page on entry on local storage so that the rest of the pages links come back to this page
	onMount(() => {
		window.localStorage.setItem('company', `${data.slug}`);
		company.set(data.slug);
	});
</script>

<Hero hook={data.page.hero.hook} cta={data.page.hero.cta} logo={data.page.company.logoSrc} />
<CoverLetter data={data.page.coverLetter} />
<Work headline={data.page.portfolio.headline} projects={data.projects} />
