<script lang="ts">
	import type Nav from 'src/routes/[company]/+layout.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import Modal from '$lib/components/Modal.svelte';

	export let data: Nav;

	let modalActive: boolean = false;
	function toggleModal() {
		modalActive = !modalActive;
	}
</script>

<nav>
	<div class="left">
		<a href="#top">
			<img src="/jm-logo.svg" alt="jason's logo" />
		</a>

		<div class="links">
			{#each data.links as link}
				<a class="link" href={link.href}>{link.innerText} </a>
			{/each}
		</div>
	</div>
	<div class="right">
		<div class="social">
			<a class="link" href="#contact">CONTACT</a>
			<a href="/">
				<img src="/github-logo.svg" alt="" />
			</a>
			<a href="/">
				<img src="/linkedin-logo.svg" alt="" />
			</a>
		</div>
		<div class="theme">
			<ThemeSwitcher />
		</div>

		<div class="button" class:active={modalActive === true} on:click={toggleModal}>
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
		z-index: 100;
		background-color: var(--color-bg-primary);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 0 auto;
		max-width: $xxl;
		padding: 0 var(--s-4);
		@include md {
			position: relative;
			padding: var(--s-7) var(--s-6);
		}
		a {
			&::before {
				display: none;
			}
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
				transform: rotate(-45deg) translateX(-7px) translateY(10px);
				transition: all 0.2s;
			}
			&::after {
				margin: auto;
				transform: rotate(45deg) translateX(-7px) translateY(-10px);
				transition: all 0.2s;
			}
		}
		.button {
			cursor: pointer;
			position: relative;
			margin: 0 0 0 var(--s-6);
			width: 40px;
			height: 28px;
			display: block;
			@include md {
				display: none;
			}
			div {
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto;
				content: '';
				height: 4px;
				width: 100%;
				background-color: var(--color-rock-100);
			}
			&::before,
			&::after {
				transition: all 0.2s;
				content: '';
				position: absolute;
				height: 4px;
				width: 100%;
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
			line-height: 0;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding-right: var(--s-6);
			display: none;
			@include lg {
				padding-right: var(--s-9);
			}
			@include md {
				display: flex;
			}
			img {
				padding: 0 var(--s-3);
				width: 25px;
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
		img {
			width: 65px;
			filter: var(--icon-filter);
			padding-right: var(--s-6);
			@include lg {
				width: 85px;
				padding-right: var(--s-7);
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
