<script lang="ts">
	export let portableText
</script>

<p class="text"><slot /></p>

<style lang="scss">
	.text {
		line-height: 220%;
	}
</style>
