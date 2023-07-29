<script lang="ts">
	import { Home, Seo } from "$lib/components"
	import type { PageData } from "./$types"

	export let data: PageData
</script>

<Seo data={data.page.seo} />
<Home page={data.page} tasks={data.tasks} />
