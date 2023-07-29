<script lang="ts">
	import type { PageData } from "./$types"
	import type { SeoData } from "$lib/types"
	import { Blog, Seo } from "$lib/components"

	export let data: PageData
	const seo: SeoData = {
		title: "JM.Dev Blog",
		description: "Exploring where technical web development and marketing technology meet.",
		robots: {
			follow: true,
			index: true
		},
		ogtype: "website",
		ogimage: {
			src: "https://cdn.sanity.io/images/ssq1ahcy/production/d7390f98ab6bf0da1fe530e8ddc615ed5939e59a-1200x675.jpg",
			altText: "JM.Dev Martech developoment blog"
		},
		ogurl: "https://jasonmason.dev/blog"
	}
</script>

<Seo data={seo} />
<Blog posts={data.posts} tags={data.tags} />
