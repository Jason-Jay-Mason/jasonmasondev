<!-- [company] the main company page -->
<script lang="ts">
	// TODO I need to create company page type and project[] type
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	const string = JSON.stringify(data);
</script>

<p class="test">{string}</p>

<style lang="scss">
	@use '../../theme.scss';

	.test {
		color: var(--color-text-body);
	}
</style>
