<script lang="ts">
	export let tech: string

	const websites: Record<string, string> = {
		Svelte: "https://svelte.dev/",
		Go: "https://go.dev/",
		Scss: "https://sass-lang.com/"
	}
</script>

<a href={websites[tech]}>
	<img alt="Tech icon" src={`/${tech}-logo.svg`} />
</a>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: var(--s-4);
		img {
			width: 100%;
			height: 100%;
			max-width: 35px;
			max-height: 20px;
			@include xs {
				max-width: 50px;
				max-height: 25px;
			}
			@include md {
				max-width: 35px;
				max-height: 20px;
			}
			@include lg {
				max-width: 50px;
				max-height: 25px;
			}
		}
	}
</style>
