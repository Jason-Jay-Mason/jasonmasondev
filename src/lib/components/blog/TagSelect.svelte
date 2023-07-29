<script lang="ts">
	import type { Tag } from "$lib/types"
	import { page } from "$app/stores"

	export let tags: Tag[]
	let tagScroll: HTMLDivElement

	let scrollArrows = {
		left: false,
		right: true
	}

	$: selected = $page.url.pathname.replace("/blog/tag/", "")

	function handleScroll(n: number) {
		tagScroll.scrollTo({
			left: (tagScroll.scrollLeft += n)
		})
		if (tagScroll.scrollLeft + n > 0) {
			scrollArrows.left = true
		} else {
			scrollArrows.left = false
		}
		if (tagScroll.scrollLeft + n >= tagScroll.scrollWidth - tagScroll.clientWidth) {
			scrollArrows.right = false
		} else {
			scrollArrows.right = true
		}
	}
</script>

<nav>
	<button
		class={scrollArrows.left ? "left-scroll" : "left-scroll hidden"}
		on:click={() => handleScroll(-100)}
	>
		<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.5 2L3 11.5L12.5 21" stroke="#3D3834" stroke-width="3" />
		</svg>
	</button>

	<div class="tags" bind:this={tagScroll}>
		{#each tags as tag}
			<a href={`/blog/tag/${tag.slug}`}>
				<button class={selected === tag.slug ? "tag selected" : "tag"}>
					{tag.name}
				</button>
			</a>
		{/each}
	</div>

	<button
		class={scrollArrows.right ? "right-scroll" : "right-scroll hidden"}
		on:click={() => handleScroll(100)}
	>
		<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.5 2L3 11.5L12.5 21" stroke="#3D3834" stroke-width="3" />
		</svg>
	</button>
</nav>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	nav {
		display: none;
		flex-direction: row;
		width: 50%;
		@include lg {
			display: flex;
		}
		.left-scroll,
		.right-scroll {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			border: none;
			background: transparent;
			opacity: 1;
			cursor: pointer;
			svg {
				z-index: 2;
				filter: var(--icon-filter);
			}
			&::after {
				content: "";
				z-index: 1;
				position: absolute;
				height: 100%;
				width: 160%;
				background: linear-gradient(
					to right,
					var(--color-bg-primary) 50%,
					rgba(255, 255, 255, 0) 100%
				);
				right: -80%;
			}
		}
		.right-scroll {
			transform: rotate(180deg);
		}
		.hidden {
			opacity: 0;
		}
		.tags {
			position: relative;
			display: flex;
			flex-direction: row;
			gap: var(--s-3);
			overflow: hidden;
			scroll-behavior: smooth;
			.tag {
				position: relative;
				font-size: 1rem;
				font-weight: 400;
				color: var(--color-rock-100);
				white-space: nowrap;
				padding: 10px 20px 11px 20px;
				background-color: var(--color-bg-field);
				border: solid 2px var(--color-rock-100);
				cursor: pointer;
				&:hover {
					background-color: var(--color-rock-700);
				}
			}
			.selected {
				background-color: var(--color-rock-100);
				color: var(--color-bg-primary);
				&:hover {
					background-color: var(--color-rock-100);
				}
			}
		}
	}
</style>
