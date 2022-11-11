<script lang="ts">
	import type { LayoutData } from './$types';
	import type { Navbar } from '$lib/types';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import CompanyNav from '$lib/components/CompanyNav.svelte';
	import { company } from '$lib/stores';
	export let data: LayoutData;

	let companySlug: string;
	let nav: Navbar;
	$: {
		nav = {
			links: [
				{
					innerText: 'COVER LETTER',
					href: `#coverletter`
				},
				{
					innerText: 'PROFILE',
					href: `#profile`
				},
				{
					innerText: 'PORTFOLIO',
					href: `#work`
				}
			]
		};
	}

	onMount(() => {
		let storedCompany = window.localStorage.getItem('company');
		if (storedCompany) {
			companySlug = storedCompany;
			company.set(companySlug);
		} else {
			companySlug = '';
		}
	});
</script>

<CompanyNav data={nav} isPage={false} />
<slot {companySlug} />
<Footer data={nav} />
