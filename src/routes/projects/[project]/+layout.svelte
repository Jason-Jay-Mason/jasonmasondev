<script lang="ts">
	import type { Navbar } from '$lib/types';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import CompanyNav from '$lib/components/CompanyNav.svelte';
	import { company } from '$lib/stores';

	let companySlug: string;
	//We could expose these navbar links to the cms but we will just hardcode them for now
	const nav: Navbar = {
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
	// $: {
	// 	nav = {
	// 		links: [
	// 			{
	// 				innerText: 'COVER LETTER',
	// 				href: `#coverletter`
	// 			},
	// 			{
	// 				innerText: 'PROFILE',
	// 				href: `#profile`
	// 			},
	// 			{
	// 				innerText: 'PORTFOLIO',
	// 				href: `#work`
	// 			}
	// 		]
	// 	};
	// }

	//We set the company page in local storage when a user enters via a company page
	//we pass the company to the page component
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
