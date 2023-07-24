<script lang="ts">
	import Blog from "$lib/components/blog/Blog.svelte"
	import type { PageData } from "../../[post]/$types"
	export let data: PageData
</script>

<Blog posts={data.posts} tags={data.tags} selected={data.tag} />
