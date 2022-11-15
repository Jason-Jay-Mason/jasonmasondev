<script lang="ts">
	import type { Profile } from '$lib/types';
	import HalfHeadline from '../HalfHeadline.svelte';

	export let data: Profile;

	let featuredInterest: string = 'INTERESTS';
</script>

<section id="profile">
	<div class="details">
		<HalfHeadline main={data.headline.main} sub={data.headline.sub} />
		<p class="body">
			{@html data.body}
		</p>
		<div class="interests">
			<p>{featuredInterest}</p>
			<div class="icons">
				{#each data.interests as interest}
					<div
						class="icon"
						class:featured={featuredInterest === interest.title}
						on:mouseover={() => (featuredInterest = interest.title)}
						on:focus={() => (featuredInterest = interest.title)}
					>
						<img src={interest.iconSrc} alt={interest.title} />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="image">
		<div class="background">
			<img src="/pencil-bg.svg" alt="decerative background" />
			<div class="circle" />
		</div>
		<div class="mask">
			<img src={data.img.src} alt={data.img.alt} />
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../theme/breakpoints.scss';
	section {
		position: relative;
		padding: var(--s-5) var(--s-7) var(--s-14) var(--s-7);
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		max-width: $xl;
		margin: 0 auto;
		overflow: hidden;
		@include xl {
			overflow: unset;
		}
		@include md {
			padding: var(--s-5) 0 var(--s-15) var(--s-7);
			justify-content: center;
			flex-direction: row;
		}
		.details {
			width: 100%;
			padding-right: 0;
			@include md {
				padding-right: var(--s-7);
				width: 50%;
			}
			@include lg {
				width: 60%;
			}
			.body {
				padding: var(--s-9) 0;
			}
			.interests {
				p {
					font-family: var(--font-headline);
					text-transform: uppercase;
					color: var(--color-rock-300);
					font-size: calc(var(--text-base) + 5px);
				}
				.icons {
					display: flex;
					flex-wrap: wrap;
					flex-direction: row;
					width: 100%;
					align-items: center;
					@include lg {
						width: 110%;
						flex-wrap: nowrap;
						justify-content: flex-start;
					}
					.icon {
						position: relative;
						height: var(--s-11);
						width: var(--s-11);
						margin-right: var(--s-9);
						border: 2px solid transparent;
						margin-top: var(--s-6);
						&::before {
							content: '';
							opacity: 0;
							z-index: -1;
							filter: blur(60px);
							position: absolute;
							width: 100%;
							height: 120%;
							margin: 0 auto;
							transform: translateX(-50px) translateY(-60px);
							top: 0px;
							left: 0px;
							right: 0;
							border-style: solid;
							border-width: 50px;
							border-radius: 800px;
							border-image-slice: 1;
							border-image-source: var(--color-rainbow);
						}
						&.featured {
							border: 2px solid var(--color-rock-100);
							border-image-slice: 1;
							border-image-source: var(--color-rainbow);
							background-color: var(--color-bg-primary);
							&::before {
								opacity: 1;
								transition: transform 0.4s;
								transition: border-width 0.4s;
								transition: filter 0.4s;
								filter: blur(12px);
								transform: translateY(-7px) rotate(2deg);
								border-width: 5px 10px 5px 10px;
							}
						}
						img {
							filter: var(--icon-filter);
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							height: var(--s-9);
							width: 100%;
						}
					}
				}
			}
		}

		.image {
			--height: 90vw;
			position: relative;
			height: var(--height);
			width: 100%;
			@include sm {
				--height: 80vw;
			}
			@include md {
				--height: 550px;
				width: 50%;
				transform: translateX(10%);
			}
			@include xl {
				--height: 650px;
			}
			&::before,
			&::after {
				position: absolute;
				content: '';
				z-index: -1;
				border: solid var(--color-pencil-100) 2px;
				border-radius: 10000px;
				margin: auto;
			}
			&::before {
				left: 0;
				right: 0;
				top: -4%;
				height: calc(var(--height) - 20px);
				width: calc(var(--height) - 20px);
				@include md {
					top: -1%;
					left: -1%;
				}
			}
			&::after {
				left: 0;
				right: 0;
				top: -3%;
				height: calc(var(--height) - 10px);
				width: calc(var(--height) - 20px);
				@include md {
					top: -2%;
					left: -3%;
				}
			}
			.background {
				z-index: -1;
				position: absolute;
				top: 0%;
				left: 0;
				right: 0;
				transform: translate(-1%, -58%) rotate(7deg);
				height: 90%;
				width: 83%;
				border-radius: 0 240px 0 100px;
				overflow: hidden;
				margin: 0 auto;
				-webkit-transform: translateZ(0);
				-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
				@include md {
					margin: 0;
					transform: translate(0%, -55%) rotate(7deg);
					height: 100%;
					width: 110%;
					top: 50%;
				}
				img {
					opacity: var(--opacity-pencilbg);
					bottom: 0;
					transform: translateY(-11%) rotate(-5deg);
					object-fit: cover;
					position: absolute;
					height: 100%;
				}
			}
			.mask {
				position: absolute;
				border-radius: 1000px;
				border: solid var(--color-rock-300) 0.1px;
				overflow: hidden;
				left: 0;
				right: 0;
				margin: auto;
				width: calc(var(--height) - 40px);
				height: calc(var(--height) - 40px);
				-webkit-transform: translateZ(0);
				-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
				@include md {
					margin: 0;
				}
				img {
					position: absolute;
					object-fit: cover;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -40%);
					transition: filter 0.8s;
					filter: saturate(0);
					width: 120vw;

					@include md {
						width: auto;
						transform: translate(-50%, -50%);
					}
					&:hover {
						filter: saturate(1);
					}
				}
			}
		}
	}
</style>
