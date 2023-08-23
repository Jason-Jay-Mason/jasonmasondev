<script>
	export let portableText
	$: isSvg = portableText.value.src.includes(".svg")
</script>

<img class:isSvg src={portableText.value.src} alt={portableText.value.alt} />

<style lang="scss">
	img {
		width: 100%;
		padding: var(--s-7) 0;
	}
	.isSvg {
		filter: var(--icon-filter);
	}
</style>
