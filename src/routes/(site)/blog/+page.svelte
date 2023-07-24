<script lang="ts">
	import { Blog } from "$lib/components"
	import type { PageData } from "./$types"
	export let data: PageData
</script>

<Blog posts={data.posts} tags={data.tags} />
