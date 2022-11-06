<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	import ThemeSwitcher from '$lib/components/theme-switcher.svelte';
</script>

<div>
	{#each data.page.layout.links as link}
		<a href={link.href}>{link.innerText} </a>
	{/each}
</div>
<ThemeSwitcher />
<slot />
<h1>this is the foorer</h1>
