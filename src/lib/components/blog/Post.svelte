<script lang="ts">
	import type { PostData } from "$lib/types"
	import { Months } from "$lib/types"

	export let data: PostData
	const date = new Date(data.date)
	$: {
		console.log(data)
	}
</script>

<section id="summary">
	<div class="blob">
		<div class="preview">
			<h1>{data.longTitle}</h1>
			<p>{data.preview}</p>
			<div class="details">
				<div class="time">
					<svg />
					{Months[date.getMonth()]} 0{date.getDay()} • {data.readingTime} Minute Read
				</div>
				<div class="tags">
					<svg />
					{#each data.tags as tag, i}
						{#if i === data.tags.length - 1}
							{tag.name}
						{:else}
							{tag.name} •
						{/if}
					{/each}
				</div>
			</div>
		</div>
		<img src={data.imgSrc} alt={data.longTitle} />
	</div>
</section>

<style lang="scss">
	#summary {
		background-color: var(--color-rock-invert-700);
		padding: var(--s-13) var(--s-6) var(--s-7) var(--s-6);
		.blob {
			display: flex;
			flex-direction: column;
			.preview {
				h1 {
					font-family: var(--font-headline);
					color: var(--color-rock-100);
					font-size: var(--text-lg);
					line-height: 120%;
					padding-bottom: var(--s-7);
				}
			}
		}
	}
</style>
