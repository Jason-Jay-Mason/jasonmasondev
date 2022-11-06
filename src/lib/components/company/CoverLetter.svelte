<script lang="ts">
	import type { CoverLetter } from '$lib/types';
	import LargeHeadline from '../LargeHeadline.svelte';

	export let data: CoverLetter;
</script>

<section id="coverletter">
	<LargeHeadline main={data.headline.main} sub={data.headline.sub} />
	<p class="body">
		{@html data.body}
	</p>
	<img src="/signature.svg" alt="" id="signature" />
</section>

<style lang="scss">
	#coverletter {
		margin: 0 auto;
		max-width: 848px;
		.body {
			padding: var(--s-10) var(--s-4);
		}
		img {
			filter: var(--icon-filter);
			width: var(--s-13);
		}
	}
</style>
