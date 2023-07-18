<!-- [company] the main company page -->
<script lang="ts">
	import type { LayoutData } from "./$types"
	import { CoverLetter, Profile } from "$lib/components"
	import { company } from "$lib/stores"
	import { onMount } from "svelte"

	export let data: LayoutData
	onMount(() => {
		window.localStorage.setItem("company", `${data.slug}`)
		company.set(data.slug)
	})
</script>

<CoverLetter data={data.page.coverLetter} />
<Profile data={data.page.profile} />
