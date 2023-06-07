<script lang="ts">
	import type { LayoutData } from './$types';
	import { Nav, Footer } from '$lib/components';
	export let data: LayoutData;
</script>

<Nav data={data.page.layout} />
<slot />
