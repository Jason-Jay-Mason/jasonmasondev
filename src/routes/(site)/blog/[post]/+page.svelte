<script lang="ts">
	import { Post, Seo } from "$lib/components"
	import type { PageData } from "./$types"

	export let data: PageData
</script>

<Seo data={data.post.seo} />
<Post post={data.post} />
