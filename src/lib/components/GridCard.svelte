<script lang="ts">
	// this is just the card component for the projects grid on the company pages
	import type { Headline, Img } from '$lib/types';

	export let headline: Headline;
	export let description: string;
	export let img: Img;
	export let href: string;
</script>

<a data-sveltekit-reload {href}>
	<div>
		<img src={img.src} alt={img.alt} />
		<p class="sub">
			{headline.sub}
		</p>
		<p class="main">
			{headline.main}
		</p>
		<p class="description">
			{@html description}...
		</p>
	</div>
</a>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	div {
		cursor: pointer;
		position: relative;
		width: 94%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: var(--s-10) var(--s-3);
		margin: 0 auto var(--s-7) auto;
		transition: all 0.3s;
		border: 2px solid var(--color-rock-100);
		@include md {
			width: 90%;
			margin-bottom: var(--s-9);
			padding: var(--s-10) var(--s-3);
		}
		&::before {
			content: '';
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0;
			width: 100%;
			height: 100%;
			transform: translateX(-50px) translateY(-60px);
			opacity: 0;
			z-index: -1;
			filter: blur(60px);
			margin: 0 auto;
			border-style: solid;
			border-width: 50px;
			border-radius: 800px;
			border-image-slice: 1;
			border-image-source: var(--color-rainbow);
		}
		&:hover {
			background-color: var(--color-bg-card);
			border-image-slice: 1;
			border-image-source: var(--color-rainbow);
			&::before {
				opacity: 1;
				transition: transform 0.4s;
				transition: border-width 0.4s;
				transition: filter 0.4s;
				filter: blur(12px);
				transform: translateX(-10px) translateY(-10px);
				border-width: 5px 10px 5px 10px;
			}
			p {
				opacity: 1;
			}
		}
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			z-index: -1;
			object-fit: cover;
		}
		p {
			opacity: 0;
		}
		.description {
			display: none;
			padding: var(--s-3) var(--s-6) 0 var(--s-6);
			font-size: calc(var(--text-base) - 2px);
			@include md {
				display: block;
			}
		}
		.main,
		.sub {
			overflow-wrap: break-word;
			letter-spacing: 0.19rem;
			font-family: var(--font-headline);
			text-decoration: uppercase;
		}
		.sub {
			font-weight: 200;
			font-size: calc(var(--text-base) - 2px);
		}
		.main {
			font-weight: 600;
			font-size: calc(var(--text-base) + 2px);
			padding: 0 var(--s-2) 0 var(--s-1);
			@include md {
				font-size: var(--text-base);
			}
		}
	}
</style>
