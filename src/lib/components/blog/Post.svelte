<script lang="ts">
	import type { PostData } from "$lib/types"
	import { Months } from "$lib/types"
	import Text from "./blocks/Text.svelte"
	import Image from "./blocks/Image.svelte"
	import Headline from "./blocks/Headline.svelte"
	import { PortableText } from "@portabletext/svelte"
	import type { PageData } from "../../../routes/(site)/blog/[post]/$types"

	export let data: PageData
	$: post = data.post as PostData
	const date = new Date(data.post.date)
</script>

<article>
	<section id="summary">
		<div class="container">
			<div class="preview">
				<h1>{post.longTitle}</h1>
				<p>{post.preview}</p>
				<div class="details">
					<div class="row">
						<img src="/calendar-icon.svg" />
						<span>
							{Months[date.getMonth()]} 0{date.getDay()} • {post.readingTime} Minute Read
						</span>
					</div>
					<div class="row">
						<img src="/tag-icon.svg" />
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
			margin: 0 auto;
			max-width: $sm;
			padding: 0 var(--s-6);
			@include lg {
				max-width: 1300px;
				flex-direction: row;
				grid-template-columns: 3fr 2fr;
				padding: 0 var(--s-8);
				gap: var(--s-2);
			}

			.preview {
				display: flex;
				flex-direction: column;
				gap: var(--s-8);
				padding-bottom: var(--s-10);
				max-width: 600px;
				@include lg {
					padding-bottom: 0;
				}
				h1 {
					font-family: var(--font-headline);
					color: var(--color-rock-100);
					font-size: var(--text-lg);
					line-height: 120%;
					padding-bottom: var(--s-4);
					text-transform: uppercase;
					letter-spacing: 2px;
					text-align: center;
					@include lg {
						text-align: left;
					}
					@include xl {
						font-size: var(--text-xl);
						line-height: 110%;
					}
				}
				p {
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
					width: 100%;
					padding-bottom: var(--s-4);
					gap: var(--s-7);
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
							font-family: var(--font-headline);
							color: var(--color-rock-100);
							font-size: 1.2rem;
							font-weight: 300;
							@include lg {
								font-size: 1.4em;
							}
						}
					}
				}
			}
			.featured-img {
				position: relative;
				border: solid 4px var(--color-rock-100);
				width: 98%;
				height: 350px;
				min-width: 250px;
				overflow: hidden;
				margin: 0 auto;
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
		background-color: var(--color-bg-primary);
		padding: var(--s-10) var(--s-6);
		margin: 0 auto;
		max-width: $sm;
		@include lg {
			max-width: $md;
		}
	}
</style>
