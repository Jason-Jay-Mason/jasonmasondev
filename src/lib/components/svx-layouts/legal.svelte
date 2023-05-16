<script>
	//SVX layouts must be in js and cannot be ts
	import Button from '../Button.svelte';
	let blah = 'From template';
</script>

<div>
	<h1>{blah}</h1>
	<slot />
</div>
