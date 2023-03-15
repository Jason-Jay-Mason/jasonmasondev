<script lang="ts">
	import type { Navbar } from '$lib/types';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { company } from '$lib/stores';

	import { afterNavigate, beforeNavigate, disableScrollHandling } from '$app/navigation';

	export let data: Navbar;
	export let isPage: boolean;

	//#region annoying fix for safari. Safari does not play well with links to id anchors
	let scrollBottom: number;
	beforeNavigate(() => {
		let scrollToBottom = document.body.scrollHeight - window.scrollY;
		scrollBottom = scrollToBottom;
	});
	afterNavigate(() => {
		disableScrollHandling();
		const hash = window.location.hash.replace('#', '');
		const anchor = document.getElementById(hash)?.getBoundingClientRect();
		let next = anchor?.y - scrollBottom;
		if (next) {
			window.scrollTo({
				top: next,
				behavior: 'smooth'
			});
		}
	});
	function handleAnchorClick(e) {
		e.preventDefault();
		const link = e.currentTarget;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		});
	}

	let modalActive: boolean = false;
	function toggleModal() {
		modalActive = !modalActive;
	}
	//#endregion
</script>

<nav>
	<div class="left">
		<img src="/jm-logo.svg" alt="jason's logo" class="logo" />
		<div class="links">
			{#each data.links as link}
				{#if !isPage}
					{#if $company}
						<a class="link" href={`/${$company}${link.href}`}>{link.innerText} </a>
					{:else}
						<a class="link" href="/" on:click={handleAnchorClick}>{link.innerText} </a>
					{/if}
				{:else}
					<a class="link" href={`${link.href}`} on:click={handleAnchorClick}>{link.innerText} </a>
				{/if}
			{/each}
		</div>
	</div>
	<div class="right">
		<div class="social">
			{#if $company}
				{#if !isPage}
					<a class="link" href={`/${$company}#contact`}>CONTACT</a>
				{:else}
					<a class="link" href={`#contact`} on:click={handleAnchorClick}>CONTACT </a>
				{/if}
			{/if}
			<a href="https://github.com/Jason-Jay-Mason/" target="_blank" rel="noreferrer">
				<img src="/github-logo.svg" alt="" class="icon" />
			</a>
			<a href="https://www.linkedin.com/in/jasonjaymason/" target="_blank" rel="noreferrer">
				<img src="/linkedin-logo.svg" alt="" class="icon" />
			</a>
		</div>
		<div class="theme">
			<ThemeSwitcher />
		</div>

		<div class="hamburger" class:active={modalActive === true} on:click={toggleModal}>
			<div />
		</div>
	</div>
	<Modal data={data.links} bind:active={modalActive} />
</nav>

<style lang="scss">
	@import '../../lib/theme/breakpoints.scss';
	nav {
		position: sticky;
		top: 0;
		height: 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: $xxl;
		z-index: 100;
		background-color: var(--color-bg-primary);
		margin: 0 auto;
		padding: 0 var(--s-4);
		@include md {
			position: relative;
			height: 90px;
			padding: var(--s-7) var(--s-8);
		}
		@include xl {
			padding: var(--s-7) var(--s-9);
		}
		.theme {
			display: none;
			@include md {
				display: block;
			}
		}
		.active {
			div {
				opacity: 0;
			}
			&::before {
				margin: auto;
				transform: rotate(-45deg) translate(-9px, 8px);
				transition: all 0.2s;
			}
			&::after {
				margin: auto;
				transform: rotate(45deg) translate(-8px, -9px);
				transition: all 0.2s;
			}
		}
		.hamburger {
			cursor: pointer;
			position: relative;
			width: 40px;
			height: 28px;
			margin: 0 0 0 var(--s-6);
			@include md {
				display: none;
			}
			div {
				position: absolute;
				top: 0;
				bottom: 0;
				height: 4px;
				width: 100%;
				margin: auto;
				background-color: var(--color-rock-100);
			}
			&::before,
			&::after {
				content: '';
				position: absolute;
				height: 4px;
				width: 100%;
				transition: all 0.2s;
				background-color: var(--color-rock-100);
			}
			&::before {
				top: 0;
			}
			&::after {
				bottom: 0;
			}
		}
		.social {
			display: none;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			line-height: 0;
			padding-right: var(--s-6);
			@include lg {
				padding-right: var(--s-9);
			}
			@include md {
				display: flex;
			}
			.icon {
				margin: 0 var(--s-4);
				width: 28px;
				filter: var(--icon-filter);
			}
		}
		.right,
		.left {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.links {
			display: none;
			@include md {
				display: flex;
			}
		}
		.logo {
			width: 90px;
			padding-right: var(--s-6);
			filter: var(--icon-filter);
			@include lg {
				width: 110px;
				padding-right: var(--s-8);
			}
		}
		.link {
			font-family: var(--font-headline);
			font-size: calc(var(--text-base) - 5px);
			font-weight: 600;
			letter-spacing: 0.17rem;
			padding: 0 var(--s-3);
			@include lg {
				font-size: calc(var(--text-base) - 2px);
				padding: 0 var(--s-7);
			}
		}
	}
</style>
