<script lang="ts">
	import type { Link } from '$lib/types';
	export let data: Link[];
	export let active: boolean;
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
</script>

<div class="modal" class:inactive={active === false}>
	<div
		class="modal-links"
		on:click={() => {
			active = !active;
		}}
	>
		{#each data as link}
			<a href={link.href}>{link.innerText}</a>
		{/each}
		<a class="link" href="/">CONTACT</a>
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
</div>

<style lang="scss">
	@import '../../lib/theme/breakpoints.scss';
	.modal,
	.modalActive {
		position: absolute;
		left: 0;
		right: 0;
		top: 50px;
		margin: 0 auto;
		z-index: 100;
		width: 100vw;
		background-color: var(--color-bg-primary);
		transition: all 0.2s;
		padding-bottom: var(--s-9);
		@include md {
			display: none;
		}
		.social {
			padding: var(--s-8) var(--s-6) 0 var(--s-6);
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 20px;
			a {
				&::before {
					display: none;
				}
			}
			.icons {
				display: flex;
				flex-direction: row;
				img {
					padding: 0 var(--s-2);
					filter: var(--icon-filter);
					width: 30px;
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
