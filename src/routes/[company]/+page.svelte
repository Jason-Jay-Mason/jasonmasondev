<!-- [company] the main company page -->
<script lang="ts">
	// TODO I need to create company page type and project[] type
	import type { PageData } from './$types';
	export let data: PageData;
	const string = JSON.stringify(data.projects);
</script>

<p>{string}</p>
