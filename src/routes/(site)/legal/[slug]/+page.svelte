<script lang="ts">
	import type { PageData } from "./$types"
	import { Seo, Legal } from "$lib/components"

	export let data: PageData
</script>

<Seo data={data.legal.seo} />
<Legal data={data.legal} />
