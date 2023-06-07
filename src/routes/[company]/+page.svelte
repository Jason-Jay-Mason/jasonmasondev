<!-- [company] the main company page -->
<script lang="ts">
	import type { LayoutData } from './$types';
	import { Hero, CoverLetter, Profile, Contact, Experience } from '$lib/components';
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
<Contact />
