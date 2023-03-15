<!-- [company] the main company page -->
<script lang="ts">
	import Hero from '$lib/components/company/Hero.svelte';
	import CoverLetter from '$lib/components/company/CoverLetter.svelte';
	import Work from '$lib/components/Work.svelte';
	import Profile from '$lib/components/company/Profile.svelte';
	import Contact from '$lib/components/company/Contact.svelte';
	import Experience from '$lib/components/company/Experience.svelte';
	import type { LayoutData } from './$types';
	import { company } from '$lib/stores';
	import { onMount } from 'svelte';

	export let data: LayoutData;
	// Setting the company page in local storage so we can have context on how
	// the user came to the site and dynamically render all links accordingly
	onMount(() => {
		window.localStorage.setItem('company', `${data.slug}`);
		company.set(data.slug);
	});
</script>

<Hero hook={data.page.hero.hook} cta={data.page.hero.cta} logo={data.page.company.logoSrc} />
<CoverLetter data={data.page.coverLetter} />
<Profile data={data.page.profile} />
<Experience data={data.page.experience} />
<Work headline={data.page.portfolio.headline} projects={data.projects} />
<Contact />
