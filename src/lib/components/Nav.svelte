<script lang="ts">
	import type { Navbar } from '$lib/types';
	import { ThemeSwitcher, Modal } from '$lib/components';

	export let data: Navbar = {
		links: [
			{
				innerText: 'Projects',
				href: '/projects'
			},
			{
				innerText: 'Blog',
				href: '/blog'
			},
			{
				innerText: 'Mustachio',
				href: '/mustachio'
			}
		]
	};

	let modalActive: boolean = false;
	function toggleModal() {
		modalActive = !modalActive;
	}
</script>

<nav>
	<div class="left">
		<a href="/">
			<img src="/jm-logo.svg" alt="jason's logo" class="logo" />
		</a>

		<div class="links">
			{#each data.links as link}
				<a class="link" href={link.href}>{link.innerText}</a>
			{/each}
		</div>
	</div>
	<div class="right">
		<div class="social">
			<a class="link" href="#contact">Contact</a>
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

		<button
			class="hamburger"
			class:active={modalActive === true}
			aria-label="Toggle Menu"
			on:click={toggleModal}
		>
			<div />
		</button>
	</div>
	<Modal data={data.links} bind:active={modalActive} />
</nav>

<style lang="scss">
	@import '../../lib/theme/breakpoints.scss';
	nav {
		position: sticky;
		top: 0;
		width: 100%;
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
			position: absolute;
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
				transform: rotate(-45deg) translate(-7px, 6px);
				transition: all 0.2s;
			}
			&::after {
				margin: auto;
				transform: rotate(45deg) translate(-7px, -7px);
				transition: all 0.2s;
			}
		}
		.menu-button {
			display: flex;
			flex-direction: column;
			background-color: none;
		}
		.hamburger {
			background: none;
			border: none;
			cursor: pointer;
			position: relative;
			width: 30px;
			height: 23px;
			margin: 0 0 0 var(--s-6);
			@include md {
				display: none;
			}
			div {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				height: 4px;
				width: 100%;
				margin: auto;
				background-color: var(--color-rock-100);
			}
			&::before,
			&::after {
				content: '';
				position: absolute;
				left: 0;
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
				margin: 0 var(--s-3);
				width: 24px;
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
			width: 80px;
			padding-right: var(--s-6);
			filter: var(--icon-filter);
			@include lg {
				width: 103px;
				padding-right: var(--s-8);
			}
		}
		.link {
			font-family: var(--font-body);
			text-transform: uppercase;
			font-size: 12px;
			font-weight: 600;
			letter-spacing: 0.17rem;
			padding: 0 var(--s-3);
			@include lg {
				font-size: 12px;
				padding: 0 var(--s-8);
			}
		}
	}
</style>
