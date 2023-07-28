<script>
	export let portableText
</script>

<img src={portableText.value.src} alt={portableText.value.alt} />

<style>
	img {
		width: 100%;
		padding: var(--s-7) 0;
	}
</style>
