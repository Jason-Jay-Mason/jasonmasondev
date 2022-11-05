<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const string = JSON.stringify(data);
</script>

<p>{string}</p>
