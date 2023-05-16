<!-- A catch all error component for the site I will make a more robust one later 
TODO: better page level error handling and catchall
-->
<script lang="ts">
	import PageError from '$lib/components/PageError.svelte';
	import { page } from '$app/stores';
</script>

<PageError
	main={`${$page.status} ${$page.error?.message}`}
	sub={`👋 This isn't the page your looking for...`}
/>
