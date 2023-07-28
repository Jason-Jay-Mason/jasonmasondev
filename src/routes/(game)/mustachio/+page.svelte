<script lang="ts">
	import { Mustachio } from "$lib/components"
	import { mustachioConfig } from "$lib/config/game-configs"
</script>

<div class="container">
	<Mustachio config={mustachioConfig} />
</div>

<style lang="scss">
	.container {
		height: 100vh;
		width: 100%;
	}
	h1 {
		font-size: 100px;
	}
</style>
