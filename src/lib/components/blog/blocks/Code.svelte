<script lang="ts">
	import type { CustomBlockComponentProps } from "@portabletext/svelte"
	export let portableText: CustomBlockComponentProps<{ markup: string; filename: string }>
</script>

<div class="code-block">
	<div class="code-title">{portableText.value.filename}</div>
	<pre class="code-window"><code>{@html portableText.value.markup}</code></pre>
</div>
