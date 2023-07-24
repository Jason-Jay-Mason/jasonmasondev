<script lang="ts">
	import type { PostData } from "$lib/types"
	import { Months } from "$lib/types"
	import { blur } from "svelte/transition"

	export let post: PostData
	const date = new Date(post.date)
</script>

<a href={`/blog/${post.slug}`} transition:blur>
	<div class="card rainbow-hover">
		<img src={post.imgSrc} alt={post.longTitle} />
		<div class="details">
			<h5>{post.shortTitle}</h5>
			<p>{post.preview}</p>
			<div class="info">
				<span class="time"
					>{Months[date.getMonth()]} 0{date.getDay()} • {post.readingTime} minutes
				</span>
				<div class="tags">
					{#each post.tags as tag}
						<div class="tag">
							<span class="tag-name">{tag.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.card {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		border: solid 4px var(--color-rock-100);
		max-width: 480px;
		&:hover {
			img {
				filter: grayscale(0);
			}
			.details {
				background-color: var(--color-bg-card);
			}
		}
		img {
			width: 100%;
			height: 50%;
			filter: grayscale(80%);
			transition: all 0.3s ease;
		}
		.details {
			padding: var(--s-6) var(--s-6);
			color: var(--color-text-body);
			background-color: var(--color-bg-field);
			@include xs {
				padding: var(--s-6) var(--s-8);
			}
			@include sm {
				padding: var(--s-6) var(--s-7);
			}
			@include md {
				padding: var(--s-7) var(--s-8);
			}
			@include lg {
				padding: var(--s-7) var(--s-8);
			}
			h5 {
				font-family: var(--font-headline);
				font-size: clamp(1.2rem, 5vw, 1.6rem);
				letter-spacing: 2px;
				line-height: 1.5;
				font-weight: 700;
				margin: var(--s-3) 0 var(--s-4) 0;
				text-transform: uppercase;
				@include sm {
					font-size: clamp(1.2rem, 3vw, 1.6rem);
				}
				@include lg {
					font-size: clamp(1.2rem, 2vw, 1.6rem);
				}
			}
			p {
				font-size: 0.7rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				margin-bottom: var(--s-7);
			}
			.info {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding-bottom: var(--s-5);
				gap: var(--s-5);
				.time {
					font-family: var(--font-body);
					font-weight: 400;
					font-size: 0.8rem;
					white-space: nowrap;
				}
				.tags {
					width: fit-content;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-content: center;
					.tag {
						display: flex;
						justify-content: center;
						align-content: center;
						border: solid 1px var(--color-rock-100);
						background-color: var(--color-rock-800);
						margin-right: 4px;
						height: fit-content;
						background-color: var(--color-rock-invert-700);
						padding: var(--s-4) 10px;
						.tag-name {
							font-family: var(--font-body);
							font-weight: 400;
							margin-top: -2px;
							font-size: 0.7rem;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
</style>
