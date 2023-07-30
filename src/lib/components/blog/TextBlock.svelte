<script>
	import { PortableText } from "@portabletext/svelte"
	import Text from "./blocks/Text.svelte"
	import Image from "./blocks/Image.svelte"
	import Headline from "./blocks/Headline.svelte"
	import List from "./blocks/List.svelte"
	import ListItem from "./blocks/ListItem.svelte"

	export let value
</script>

<PortableText
	{value}
	components={{
		types: {
			image: Image
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
