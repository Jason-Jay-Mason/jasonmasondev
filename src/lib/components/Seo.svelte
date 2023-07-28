<script lang="ts">
	import type { SeoData } from "$lib/types"
	export let data: SeoData
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta
		name="robots"
		content={`${data.robots.index ? "index" : "noindex"}, ${
			data.robots.follow ? "follow" : "nofollow"
		}`}
	/>
	<meta property="og:title" content={data.title} />
	<meta property="og:type" content={data.ogtype} />
	<meta property="og:url" content={data.ogurl} />
	<meta property="og:image" content={data.ogimage.src} />
	<meta property="og:image:alt" content={data.ogimage.altText} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="675" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Jason Mason Dev" />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta name="twitter:image" content={data.ogimage.src} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@jasonmasondev" />
</svelte:head>
