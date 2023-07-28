<script lang="ts">
	import Blog from "$lib/components/blog/Blog.svelte"
	import type { PageData } from "./$types"
	export let data: PageData
</script>

<svelte:head>
	<link rel="canonical" href="http://jasonmason.dev/blog" />
</svelte:head>
<Blog posts={data.posts} tags={data.tags} />
