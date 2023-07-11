<script lang="ts">
	export let tech: string

	const websites: Record<string, string> = {
		Svelte: "https://svelte.dev/",
		Go: "https://go.dev/"
	}
	$: {
		console.log(tech)
	}
</script>

<a href={websites[tech]}>
	<img src={`/${tech}-logo.svg`} />
</a>
