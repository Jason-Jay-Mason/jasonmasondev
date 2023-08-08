<script>
	import { PortableText } from "@portabletext/svelte"
	import Text from "./blocks/Text.svelte"
	import Image from "./blocks/Image.svelte"
	import Headline from "./blocks/Headline.svelte"
	import List from "./blocks/List.svelte"
	import ListItem from "./blocks/ListItem.svelte"
	import Code from "./blocks/Code.svelte"
	import Math from "./blocks/Math.svelte"

	export let value
</script>

<PortableText
	{value}
	components={{
		types: {
			image: Image,
			code: Code,
			latex: Math
		},
		block: {
			normal: Text,
			h2: Headline,
			h3: Headline,
			h4: Headline
		},
		list: {
			bullet: List
		},
		listItem: {
			normal: ListItem
		}
	}}
/>
