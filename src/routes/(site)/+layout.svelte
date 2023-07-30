<script lang="ts">
	import type { LayoutData } from "./$types"
	import { Nav, Footer } from "$lib/components"

	export let data: LayoutData
</script>

<Nav />
<slot />
<Footer legal={data.legal} />

<style>
	.blah {
		height: 100vh;
	}
</style>
