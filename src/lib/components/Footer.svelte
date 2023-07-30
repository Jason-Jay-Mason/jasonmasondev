<script lang="ts">
	import type { LegalData, Navbar } from "$lib/types"
	import { ThemeSwitcher, LegalBar } from "$lib/components"

	export let legal: LegalData[]

	export let data: Navbar = {
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
</script>

<footer>
	<div class="top">
		<a href="/">
			<img class="logo" src="/jm-logo.svg" alt="Jason Mason logo" />
		</a>
		<div class="links">
			{#each data.links as link}
				<a href={link.href}>{link.innerText}</a>
			{/each}
		</div>

		<div class="social">
			<a href="https://github.com/Jason-Jay-Mason/" target="_blank" rel="noreferrer">
				<img src="/github-logo.svg" alt="" />
			</a>
			<a href="https://www.linkedin.com/in/jasonjaymason/" target="_blank" rel="noreferrer">
				<img src="/linkedin-logo.svg" alt="" />
			</a>
			<div class="theme">
				<ThemeSwitcher />
			</div>
		</div>
	</div>
	<LegalBar links={legal} />
</footer>

<style lang="scss">
	@import "../theme/breakpoints.scss";
	footer {
		z-index: 99;
		position: relative;
		background-color: var(--color-rock-invert-900);
		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 80%;
			max-width: $lg;
			padding: var(--s-10) 0 var(--s-9) 0;
			margin: var(--s-7) auto 0 auto;
			.logo {
				position: relative;
				filter: var(--icon-filter);
				width: var(--s-12);
			}
			&::before {
				content: "";
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
					font-family: var(--font-body);
					font-weight: 400;
					letter-spacing: 0.17rem;
					color: var(--color-text-body);
					padding-right: var(--s-9);
					font-size: 1.2rem;
					&:hover {
						opacity: 0.9;
					}
				}
			}
			.social {
				display: flex;
				gap: var(--s-4);
				filter: var(--icon-filter);
				img {
					width: 30px;
					height: 30px;
				}
				.theme {
					position: relative;
					width: 30px;
					height: 30px;
					margin-left: var(--s-5);
				}
			}
		}
	}
</style>
