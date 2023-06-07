<script lang="ts">
	import { Error } from '$lib/components';
	import { page } from '$app/stores';
</script>

<Error
	main={`${$page.status} ${$page.error?.message}`}
	sub={`👋 This isn't the page your looking for...`}
/>
