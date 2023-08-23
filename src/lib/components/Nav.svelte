<script lang="ts">
	import type { Navbar } from "$lib/types"
	import { ThemeSwitcher, Modal } from "$lib/components"
	import { afterNavigate } from "$app/navigation"

	let data: Navbar = {
		links: [
			{
				innerText: "Projects",
				href: "/#projects"
			},
			{
				innerText: "Blog",
				href: "/blog"
			},
			{
				innerText: "Mustachio",
				href: "/mustachio"
			}
		]
	}
	let modalLinks = [
		{ innerText: "Home", href: "/" },
		...data.links.filter((link) => link.href !== "/mustachio")
	]

	let scrollY = 0
	let hidden = false
	let sticky = true
	let modalActive: boolean = false
	function toggleModal() {
		modalActive = !modalActive
	}
	function handleHide() {
		if (window.scrollY > 50) {
			sticky = true
		} else {
			sticky = false
		}
		if (window.scrollY > scrollY + 20 && window.scrollY > 20) {
			hidden = true
		}
		if (window.scrollY < scrollY) {
			hidden = false
		}
	}
	afterNavigate(() => {
		hidden = false
		handleHide()
	})
</script>

<svelte:window bind:scrollY on:scroll={handleHide} />
<nav class:hidden class:sticky>
	<div class="container">
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
				<a class="link" href="/#contact">Contact</a>
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
		</div>

		<button
			class="hamburger"
			class:modalActive
			aria-label="Toggle Menu"
			on:click={() => (modalActive = !modalActive)}
		>
			<div />
		</button>
	</div>
	<Modal data={modalLinks} bind:active={modalActive} />
</nav>

<style lang="scss">
	@import "../../lib/theme/breakpoints.scss";

	nav {
		position: fixed;
		z-index: 100;
		top: 0;
		height: 60px;
		width: 100%;
		margin: 0 auto -75px auto;
		padding: 0 var(--s-5);
		border-bottom: solid 1px transparent;
		background-color: transparent;
		transform: translateY(0);
		transition: all 0.3s;
		@include md {
			padding: 0 var(--s-6);
		}
		@include lg {
			padding: 0 var(--s-8);
			height: 68px;
		}
		@include xl {
			padding: 0 var(--s-9);
		}
		&:hover {
			background-color: var(--color-rock-invert-900);
			border-color: var(--color-rock-200);
		}
		.link {
			position: relative;
			font-size: 0.8rem;
			font-family: var(--font-body);
			font-weight: 400;
			letter-spacing: 0.1rem;
			margin: 0 var(--s-6);
			color: var(--color-text-body);
			@include lg {
				font-size: 14px;
				letter-spacing: 0.15rem;
				margin: 0 var(--s-7);
			}
			&:hover {
				opacity: 0.8;
			}
		}
		.container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			max-width: $xxl;
			height: 100%;
			margin: 0 auto;
			transition: all 2s;
			.left {
				display: flex;
				justify-content: center;
				align-items: center;
				.logo {
					position: relative;
					top: 6px;
					width: 90px;
					padding-right: var(--s-6);
					filter: var(--icon-filter);
					transition: all 0.1s ease;
					@include lg {
						width: 110px;
						padding-right: var(--s-8);
					}
				}
				.links {
					display: none;
					@include md {
						display: flex;
					}
				}
			}
			.right {
				display: flex;
				justify-content: center;
				align-items: center;
				.social {
					display: none;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					line-height: 0;
					padding-right: var(--s-6);
					@include lg {
						padding-right: var(--s-7);
					}
					@include md {
						display: flex;
					}
					.icon {
						width: 24px;
						margin: 0 var(--s-2);
						filter: var(--icon-filter);
					}
				}
				.theme {
					display: none;
					bottom: 1px;
					position: relative;
					width: 21px;
					height: 21px;
					@include md {
						display: block;
					}
				}
			}
			.hamburger {
				position: relative;
				width: 28px;
				height: 22px;
				margin: 0 0 0 var(--s-6);
				border: none;
				cursor: pointer;
				background: none;
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
					content: "";
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

			.modalActive {
				div {
					opacity: 0;
				}
				&::before {
					margin: auto;
					transform: rotate(-45deg) translate(-6px, 6px);
					transition: all 0.2s;
				}
				&::after {
					margin: auto;
					transform: rotate(45deg) translate(-7px, -7px);
					transition: all 0.2s;
				}
			}
		}
	}

	.hidden {
		transform: translateY(-100%);
	}

	.sticky {
		background-color: var(--color-rock-invert-900);
		border-color: var(--color-rock-200);
		.logo {
			width: 90px;
			@include lg {
				width: 109px;
			}
		}
	}
</style>
