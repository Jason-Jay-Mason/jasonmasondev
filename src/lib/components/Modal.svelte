<script lang="ts">
	import type { Link } from "$lib/types"
	import { ThemeSwitcher } from "$lib/components"
	import { outclickaction } from "$lib/actions/outclick"

	export let data: Link[]
	export let active: boolean
</script>

<div
	use:outclickaction
	on:outclick={() => (active = false)}
	class="modal"
	class:inactive={active === false}
>
	<div
		class="modal-links"
		on:click={() => {
			active = !active
		}}
		on:keydown={() => {
			active = !active
		}}
	>
		{#each data as link}
			<a href={`${link.href}`}>{link.innerText}</a>
		{/each}
		<a class="link" href={`/#contact`}>Contact</a>
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
		<div class="theme">
			<ThemeSwitcher />
		</div>
	</div>
</div>

<style lang="scss">
	@import "../../lib/theme/breakpoints.scss";
	.modal {
		position: absolute;
		left: 0;
		right: 0;
		top: 59px;
		display: flex;
		flex-direction: column;
		align-items: space-between;
		width: 100vw;
		z-index: 100;
		background-color: var(--color-bg-primary);
		border-width: 1px 0 1px 0;
		border-style: solid;
		border-color: var(--color-rock-400);
		transition: all 0.2s;
		margin: 0 auto;
		padding: var(--s-7) var(--s-7) var(--s-7) var(--s-7);
		@include md {
			display: none;
		}
		.social {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			.icons {
				display: flex;
				flex-direction: row;
				line-height: 0;
				img {
					width: 30px;
					padding: 0 var(--s-1);
					filter: var(--icon-filter);
				}
			}
			.theme {
				width: 22px;
				height: 22px;
			}
		}
		.modal-links {
			display: flex;
			flex-direction: column;
			padding-bottom: var(--s-8);
			a {
				font-family: var(--font-body);
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
