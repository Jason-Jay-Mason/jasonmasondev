<script lang="ts">
	import type { LayoutData } from './$types';
	import CompanyNav from '$lib/components/CompanyNav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	export let data: LayoutData;
</script>

<CompanyNav data={data.page.layout} isPage={true} />
<slot />
<Footer data={data.page.layout} />
