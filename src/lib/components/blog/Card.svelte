<script lang="ts">
	import type { PostData } from "$lib/types"
	import { Months } from "$lib/types"
	import { blur } from "svelte/transition"

	export let post: PostData
	const date = new Date(post.date)
</script>

<a href={`/blog/${post.slug}`} transition:blur>
	<div class="card rainbow-hover">
		<div class="featured-img">
			<img src={post.imgSrc} alt={post.longTitle} />
		</div>
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
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
		border: solid 4px var(--color-rock-100);
		&:hover {
			.featured-img {
				img {
					filter: grayscale(0);
				}
			}
			.details {
				background-color: var(--color-bg-primary);
			}
		}
		.featured-img {
			display: relative;
			overflow: hidden;
			height: 270px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				filter: grayscale(80%);
				transition: all 0.3s ease;
			}
		}

		.details {
			padding: var(--s-6) var(--s-6);
			color: var(--color-text-body);
			background-color: var(--color-rock-invert-800);
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
				font-size: clamp(1.2rem, 5vw, 1.6rem);
				font-family: var(--font-headline);
				letter-spacing: 2px;
				line-height: 1.5;
				font-weight: 700;
				text-transform: uppercase;
				margin: var(--s-3) 0 var(--s-4) 0;
				@include sm {
					font-size: clamp(1.2rem, 3vw, 1.6rem);
				}
				@include lg {
					font-size: clamp(1.2rem, 2vw, 1.6rem);
				}
			}
			p {
				font-size: 0.8rem;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				-webkit-box-orient: vertical;
				overflow: hidden;
				margin-bottom: var(--s-7);
			}
			.info {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				gap: var(--s-6);
				padding-bottom: var(--s-5);
				.time {
					font-size: 0.8rem;
					font-family: var(--font-body);
					font-weight: 400;
					white-space: nowrap;
				}
				.tags {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-content: center;
					flex-wrap: wrap;
					gap: var(--s-3);
					width: fit-content;
					.tag {
						display: flex;
						justify-content: center;
						align-content: center;
						height: fit-content;
						padding: var(--s-4) 10px;
						border: solid 1px var(--color-rock-100);
						background-color: var(--color-rock-invert-700);
						.tag-name {
							font-size: 0.8rem;
							font-family: var(--font-body);
							font-weight: 400;
							white-space: nowrap;
							margin-top: -2px;
						}
					}
				}
			}
		}
	}
</style>
