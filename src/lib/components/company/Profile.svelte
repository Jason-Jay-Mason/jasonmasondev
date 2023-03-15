<script lang="ts">
	import type { Profile } from '$lib/types';
	import HalfHeadline from '../HalfHeadline.svelte';

	export let data: Profile;

	//We change this text on hover
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
			<img src="/pencil-bg-profile.svg" alt="decerative background" />
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
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		max-width: $xl;
		margin: 0 auto;
		padding: var(--s-5) var(--s-7) var(--s-14) var(--s-7);
		@include md {
			justify-content: center;
			flex-direction: row;
			padding: var(--s-5) 0 var(--s-15) var(--s-7);
		}
		.details {
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
					align-items: center;
					width: 100%;
					@include lg {
						flex-wrap: nowrap;
						justify-content: flex-start;
						width: 110%;
					}
					.icon {
						position: relative;
						height: var(--s-11);
						width: var(--s-11);
						margin: var(--s-6) var(--s-9) 0 0;
						border: 2px solid transparent;
						&::before {
							content: '';
							position: absolute;
							top: 0px;
							left: 0px;
							right: 0;
							width: 100%;
							height: 120%;
							transform: translateX(-50px) translateY(-60px);
							z-index: -1;
							margin: 0 auto;
							opacity: 0;
							filter: blur(60px);
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
								transform: translateY(-7px) rotate(2deg);
								opacity: 1;
								transition: all 0.4s;
								filter: blur(12px);
								border-width: 5px 10px 5px 10px;
							}
						}
						img {
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							height: var(--s-9);
							width: 100%;
							filter: var(--icon-filter);
						}
					}
				}
			}
		}

		.image {
			position: relative;
			height: var(--height);
			width: 100%;
			--height: 90vw;
			@include sm {
				--height: 80vw;
			}
			@include md {
				width: 50%;
				transform: translateX(10%);
				--height: 550px;
			}
			@include xl {
				--height: 650px;
			}
			&::before,
			&::after {
				content: '';
				position: absolute;
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
				position: absolute;
				top: 0%;
				left: 0;
				right: 0;
				transform: translate(5%, -3%) rotate(7deg);
				height: 95%;
				width: 90%;
				z-index: -1;
				overflow: hidden;
				border-radius: 0px 240px 0 200px;
				//Get the gpu involved with this setting
				transform: translateZ(0);
				@include md {
					height: 100%;
					width: 103%;
					top: 50%;
					transform: translate(0, -53%) rotate(7deg);
					margin: 0;
				}
				img {
					position: absolute;
					height: 110%;
					width: 100%;
					bottom: 0;
					top: 0;
					transform: translateY(-11%) rotate(-5deg);
					object-fit: cover;
					opacity: var(--opacity-pencilbg);
				}
			}
			.mask {
				position: absolute;
				left: 0;
				right: 0;
				width: calc(var(--height) - 40px);
				height: calc(var(--height) - 40px);
				border-radius: 1000px;
				border: solid var(--color-rock-300) 0.1px;
				overflow: hidden;
				margin: auto;
				mask-image: radial-gradient(circle, white 100%, black 100%);
				-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
				@include md {
					margin: 0;
				}
				img {
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -40%);
					width: 120vw;
					object-fit: cover;
					transition: filter 0.8s;
					filter: saturate(0);
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
