<script lang="ts">
	import { Nav, Footer } from "$lib/components"
</script>

<Nav />
<slot />
<Footer />

<style>
	.blah {
		height: 100vh;
	}
</style>
