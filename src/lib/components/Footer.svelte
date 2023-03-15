<script lang="ts">
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import type { Navbar } from '$lib/types';
	export let data: Navbar;
	import { company } from '$lib/stores';
</script>

<footer>
	<img src="/jm-logo.svg" alt="" />
	<div class="links">
		{#if $company && data}
			{#each data.links as link}
				<a href={`/${$company}${link.href}`}>{link.innerText}</a>
			{/each}
		{/if}
	</div>

	<div class="social">
		<div class="icons">
			<a href="https://github.com/Jason-Jay-Mason/" target="_blank" rel="noreferrer">
				<img src="/github-logo.svg" alt="" />
			</a>
			<a href="https://www.linkedin.com/in/jasonjaymason/" target="_blank" rel="noreferrer">
				<img src="/linkedin-logo.svg" alt="" />
			</a>
		</div>
		<ThemeSwitcher />
	</div>
</footer>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	footer {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		max-width: $lg;
		padding: var(--s-10) 0;
		margin: var(--s-7) auto 0 auto;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 2px;
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
				width: 35px;
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
