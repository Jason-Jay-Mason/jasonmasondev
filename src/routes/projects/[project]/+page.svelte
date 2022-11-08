<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	const string = JSON.stringify(data);
</script>

<p>{string}</p>
