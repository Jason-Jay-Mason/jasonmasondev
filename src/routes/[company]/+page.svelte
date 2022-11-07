<!-- [company] the main company page -->
<script lang="ts">
	import Hero from '$lib/components/company/Hero.svelte';
	import CoverLetter from '$lib/components/company/CoverLetter.svelte';
	// TODO I need to create company page type and project[] type
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<Hero hook={data.page.hero.hook} cta={data.page.hero.cta} logo={data.page.company.logoSrc} />
<CoverLetter data={data.page.coverLetter} />
