<script lang="ts">
	import type { LegalData } from "$lib/types"

	export let links: LegalData[]

	const date = new Date()
</script>

<div class="legal">
	<div class="content">
		<div class="links">
			{#each links as legal}
				<a href={`/legal/${legal.slug}`}>{legal.title}</a>
			{/each}
		</div>
		<p class="notice">
			Copyright ©{date.getFullYear()} Jason Mason
		</p>
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.legal {
		width: 100%;
		padding: var(--s-7) 0;
		background-color: var(--color-rock-invert-800);
		.content {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: var(--s-6);
			justify-content: space-between;
			width: 80%;
			max-width: $lg;
			margin: 0 auto;
			white-space: nowrap;
			@include lg {
				width: 75%;
			}
			.links {
				display: flex;
				flex-direction: row;
				gap: var(--s-4);
				@include sm {
					gap: var(--s-7);
				}
			}
			a,
			p {
				font-size: 0.7rem;
				font-family: var(--font-body);
				font-weight: 300;
				color: var(--color-rock-300);
				@include sm {
					font-size: 0.9rem;
				}
			}
		}
	}
</style>
