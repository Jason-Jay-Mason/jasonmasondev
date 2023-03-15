<script lang="ts">
	import type { Link } from '$lib/types';
	export let data: Link[];
	export let active: boolean;
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { company } from '$lib/stores';
</script>

<div class="modal" class:inactive={active === false}>
	<div
		class="modal-links"
		on:click={() => {
			active = !active;
		}}
	>
		{#if $company}
			{#each data as link}
				<a href={`/${$company}${link.href}`}>{link.innerText}</a>
			{/each}
			<a class="link" href={`/${$company}#contact`}>CONTACT</a>
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
</div>

<style lang="scss">
	@import '../../lib/theme/breakpoints.scss';
	.modal {
		position: absolute;
		left: 0;
		right: 0;
		top: 50px;
		width: 100vw;
		z-index: 100;
		background-color: var(--color-bg-primary);
		transition: all 0.2s;
		margin: 0 auto;
		padding-bottom: var(--s-9);
		@include md {
			display: none;
		}
		.social {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 20px;
			padding: var(--s-8) var(--s-6) 0 var(--s-6);
			.icons {
				display: flex;
				flex-direction: row;
				img {
					width: 30px;
					padding: 0 var(--s-2);
					filter: var(--icon-filter);
				}
			}
		}
		.modal-links {
			padding: 0 var(--s-6);
			margin-top: var(--s-7);
			display: flex;
			flex-direction: column;
			a {
				font-family: var(--font-Headline);
				letter-spacing: 0.16rem;
				font-size: var(--text-base);
				padding: var(--s-6) 0;
			}
		}
	}
	.inactive {
		transform: translateX(-110vw);
	}
</style>
