<script lang="ts">
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import type { Nav } from '$lib/types';
	export let data: Nav;
</script>

<footer>
	<img src="/jm-logo.svg" alt="" />
	<div class="links">
		{#each data.links as link}
			{#if link.href === '#coverletter' || link.href === '#profile' || link.href === '#work'}
				<a href={link.href}>{link.innerText}</a>
			{/if}
		{/each}
	</div>

	<div class="social">
		<div class="icons">
			<a href="/">
				<img src="/github-logo.svg" alt="" />
			</a>
			<a href="/">
				<img src="/linkedin-logo.svg" alt="" />
			</a>
		</div>
		<ThemeSwitcher />
	</div>
</footer>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: $lg;
		width: 80%;
		position: relative;
		padding: var(--s-10) 0;
		margin: var(--s-7) auto 0 auto;
		a {
			&::before {
				display: none;
			}
		}
		&::before {
			content: '';
			position: absolute;
			height: 2px;
			top: 0;
			left: 0;
			right: 0;
			margin: 0 auto;
			background-color: var(--color-rock-200);
		}
		.links {
			display: none;
			@include lg {
				display: flex;
			}
			a {
				color: var(color-rock-300);
				padding-right: var(--s-9);
				font-family: var(--font-headline);
			}
		}
		.social {
			display: flex;
			img {
				width: 25px;
				padding-right: var(--s-4);
			}
			.icons {
				padding-right: var(--s-4);
				@include md {
					padding-right: var(--s-8);
				}
			}
		}
		img {
			filter: var(--icon-filter);
			width: var(--s-12);
		}
	}
</style>
