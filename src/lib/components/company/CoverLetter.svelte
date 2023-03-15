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
	<img src="/signature.svg" alt="My Signature" id="signature" />
</section>

<style lang="scss">
	#coverletter {
		max-width: 848px;
		margin: 0 auto var(--s-13) auto;
		.body {
			margin: var(--s-10) var(--s-7);
		}
		img {
			filter: var(--icon-filter);
			width: var(--s-13);
			margin: 0 var(--s-7);
		}
	}
</style>
