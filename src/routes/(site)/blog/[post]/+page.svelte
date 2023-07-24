<script lang="ts">
	import type { PostData } from "$lib/types"
	import { Post } from "$lib/components"

	export let data: PostData
</script>

<Post {data} />
