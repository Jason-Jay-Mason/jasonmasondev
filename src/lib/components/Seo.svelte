<script lang="ts">
	import type { SeoData } from "$lib/types"
	import { page } from "$app/stores"
	export let data: SeoData
	const defaultTitle = "JM.Dev: Martech Development"
	const defaultDescription =
		"Web developer and marketer building highly customized Martech stacks and Web Applications. "
	const defaultImage =
		"https://cdn.sanity.io/images/ssq1ahcy/production/d7390f98ab6bf0da1fe530e8ddc615ed5939e59a-1200x675.jpg"
</script>

<svelte:head>
	<title>{data.title || defaultTitle}</title>
	<meta name="description" content={data.description || defaultDescription} />
	<meta property="og:title" content={data.title || defaultTitle} />
	<meta property="og:type" content={data.ogtype || "website"} />
	<meta property="og:url" content={data.ogurl || `https://jasonmason.dev${$page.url.pathname}`} />
	<meta property="og:image" content={data.ogimage.src || defaultImage} />
	<meta property="og:image:alt" content={data.ogimage.altText || "Martech Developer"} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="675" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Jason Mason Dev" />
	<meta name="twitter:title" content={data.title || defaultTitle} />
	<meta name="twitter:description" content={data.description || defaultDescription} />
	<meta name="twitter:image" content={data.ogimage.src || defaultImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@jasonmasondev" />
	<meta
		name="robots"
		content={`${data.robots.index ? "index" : "noindex"}, ${
			data.robots.follow ? "follow" : "nofollow"
		}`}
	/>
</svelte:head>
