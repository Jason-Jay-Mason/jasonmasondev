<script lang="ts">
	import type { LayoutData } from './$types';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	export let data: LayoutData;
</script>

<Nav data={data.page.layout} />
<slot />
