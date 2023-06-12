<script lang="ts">
	import type { Cta } from "$lib/types"
	import { Hero } from "$lib/components"

	const cta: Cta = {
		hrefOrSrc: "/",
		innerText: "LET'S TALK",
		isVideo: false
	}
	const hook =
		" What’s up! I’m a web developer and marketer building highly customized Martech stacks. Click the button below and let’s talk about how I can knock out your next project. "
	const headline = "JASON MASON"
</script>

<Hero {cta} {hook} {headline} />
