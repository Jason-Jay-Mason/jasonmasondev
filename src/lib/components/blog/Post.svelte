<script lang="ts">
	import type { PostData } from "$lib/types"
	import { Months } from "$lib/types"
	import Text from "./blocks/Text.svelte"
	import Image from "./blocks/Image.svelte"
	import Headline from "./blocks/Headline.svelte"
	import { PortableText } from "@portabletext/svelte"

	export let post: PostData
	const date = new Date(post.date)
</script>

<article>
	<section id="summary">
		<div class="container">
			<div class="preview">
				<h1>{post.longTitle}</h1>
				<p class="preview-text">{post.preview}</p>
				<div class="details">
					<div class="row">
						<img src="/calendar-icon.svg" alt="Calendar icon" />
						<span>
							{Months[date.getMonth()]} 0{date.getDay()} • {post.readingTime} Minute Read
						</span>
					</div>
					<div class="row">
						<img src="/tag-icon.svg" alt="Tag icon" />
						<span>
							{#each post.tags as tag, i}
								{#if i === post.tags.length - 1}
									{tag.name}
								{:else}
									{tag.name}&nbsp;•&nbsp;
								{/if}
							{/each}
						</span>
					</div>
				</div>
			</div>
			<div class="featured-img">
				<img src={post.imgSrc} alt={post.longTitle} />
			</div>
		</div>
	</section>
	<section id="post">
		<PortableText
			value={post.body}
			components={{
				types: {
					image: Image
				},
				block: {
					normal: Text,
					h2: Headline,
					h3: Headline,
					h4: Headline
				}
			}}
		/>
	</section>
</article>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	#summary {
		background-color: var(--color-rock-invert-700);
		padding: var(--s-13) 0 var(--s-10) 0;
		@include lg {
			padding: var(--s-13) 0 var(--s-12) 0;
		}
		.container {
			display: grid;
			grid-template-columns: 1fr;
			max-width: $sm;
			margin: 0 auto;
			padding: 0 var(--s-6);
			@include lg {
				grid-template-columns: 3fr 2fr;
				gap: var(--s-2);
				max-width: 1300px;
				padding: 0 var(--s-8);
			}
			.preview {
				display: flex;
				flex-direction: column;
				gap: var(--s-8);
				max-width: 600px;
				padding-bottom: var(--s-10);
				@include lg {
					padding-bottom: 0;
				}
				h1 {
					font-size: var(--text-lg);
					font-family: var(--font-headline);
					line-height: 120%;
					letter-spacing: 2px;
					text-align: center;
					color: var(--color-rock-100);
					text-transform: uppercase;
					padding-bottom: var(--s-4);
					@include lg {
						text-align: left;
					}
					@include xl {
						font-size: var(--text-xl);
						line-height: 110%;
					}
				}
				.preview-text {
					line-height: 220%;
					padding-bottom: var(--s-4);
					text-align: center;
					@include lg {
						text-align: left;
					}
					@include xl {
						font-size: 18px;
					}
				}
				.details {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: var(--s-7);
					width: 100%;
					padding-bottom: var(--s-4);
					@include lg {
						justify-content: flex-start;
					}
					.row {
						display: flex;
						align-items: center;
						img {
							filter: var(--icon-filter);
							width: 23px;
							margin-right: 10px;
						}
						span {
							font-size: 1.2rem;
							font-family: var(--font-headline);
							font-weight: 300;
							color: var(--color-rock-100);
							@include lg {
								font-size: 1.4em;
							}
						}
					}
				}
			}
			.featured-img {
				position: relative;
				width: 98%;
				min-width: 250px;
				height: 350px;
				overflow: hidden;
				margin: 0 auto;
				border: solid 4px var(--color-rock-100);
				@include xl {
					height: 100%;
				}
				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	#post {
		max-width: $sm;
		padding: var(--s-10) var(--s-6);
		margin: 0 auto;
		background-color: var(--color-bg-primary);
		@include lg {
			max-width: $md;
		}
	}
</style>
