<!-- [company] the main company page -->
<script lang="ts">
	import Hero from '$lib/components/company/Hero.svelte';
	import CoverLetter from '$lib/components/company/CoverLetter.svelte';
	import Work from '$lib/components/Work.svelte';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';

	export let data: LayoutData;

	// setting a store for the current company so that as the user navigates to the other pages, we can always have to context of what company they are from in mind
	import { company } from '$lib/stores';
	onMount(() => {
		company.update(() => data.slug);
	});
</script>

<Hero hook={data.page.hero.hook} cta={data.page.hero.cta} logo={data.page.company.logoSrc} />
<CoverLetter data={data.page.coverLetter} />
<Work headline={data.page.portfolio.headline} projects={data.projects} />
