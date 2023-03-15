<script lang="ts">
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	export let main: string = '404 Page Not Found';
	export let sub: string = "Oops, it looks like this page doesn't exist.";
</script>

<!-- TODO: I need to make this into its own component -->
<div class="generic-nav">
	<img src="/jm-logo.svg" alt="Jason Logo" class="logo" />
	<div class="social">
		<a href="https://github.com/Jason-Jay-Mason/" target="_blank" rel="noreferrer">
			<img src="/github-logo.svg" alt="" class="icon" />
		</a>
		<a href="https://www.linkedin.com/in/jasonjaymason/" target="_blank" rel="noreferrer">
			<img src="/linkedin-logo.svg" alt="" class="icon" />
		</a>
		<div class="theme">
			<ThemeSwitcher />
		</div>
	</div>
</div>

<section>
	<h1>{main}</h1>
	<p>
		{sub}
	</p>
</section>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	.generic-nav {
		margin: 0 auto;
		max-width: $xxl;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0 var(--s-4);
		height: 40px;
		@include md {
			height: 90px;
			padding: var(--s-7) var(--s-8);
		}
		@include xl {
			padding: var(--s-7) var(--s-9);
		}
		a {
			line-height: 0;
		}
		.social {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
		.theme {
			margin-left: var(--s-8);
			display: none;
			@include md {
				display: block;
			}
		}
		.icon,
		.logo {
			filter: var(--icon-filter);
		}
		.icon {
			margin: 0 var(--s-4);
			width: 28px;
		}
		.logo {
			width: 90px;
			filter: var(--icon-filter);
			padding-right: var(--s-6);
			@include lg {
				width: 110px;
				padding-right: var(--s-8);
			}
		}
	}

	section {
		width: 100%;
		max-width: $lg;
		margin: 0 auto;
		height: 70vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 var(--s-7);
		h1 {
			color: var(--color-rock-100);
			font-family: var(--font-headline);
			font-size: var(--text-xl);
		}
		p {
			color: var(--color-rock-100);
			font-size: var(--text-md);
		}
	}
</style>
