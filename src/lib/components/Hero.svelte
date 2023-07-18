<script lang="ts">
	import type { Cta } from "$lib/types"
	import { Button } from "$lib/components"

	export let hook: string
	export let cta: Cta
	export let headline: string
</script>

<section id="top">
	<div class="container">
		<div class="intro">
			<img class="mustache" alt="mustache-logo" src="/hero-mustache.svg" />
			<div class="mask">
				<img src="/lines.svg" alt="Stylized background" />
			</div>
		</div>
		<div class="h1-container">
			<div class="h1-background">
				<h1>{headline}</h1>
			</div>
			<div class="line" />
			<div class="line-background" />
		</div>
		<div class="blurb">
			<p>
				{hook}
			</p>
		</div>
		<div class="cta-container">
			<div class="cta">
				<Button href={cta.hrefOrSrc} width="full">{cta.innerText}</Button>
			</div>
			<div class="bars" />
		</div>
		<div class="bottom">
			<div class="left" />
			<div class="right" />
		</div>
	</div>
</section>

<style lang="scss">
	@import "../theme/breakpoints.scss";
	section {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
		padding: var(--s-12) var(--s-4) var(--s-15) var(--s-4);
		@include sm {
			padding: var(--s-11) var(--s-4) var(--s-15) var(--s-4);
		}
		.cta-container {
			position: relative;
			width: 78vw;
			max-width: 400px;
			margin-bottom: var(--s-10);
			@include sm {
				width: 75%;
				margin-bottom: var(--s-9);
			}
			.cta {
				position: relative;
				z-index: 11;
				width: 80%;
				max-width: 220px;
				margin: 0 auto;
				padding: 0 var(--s-6);
				@include sm {
					width: 90%;
				}
			}
			&::before,
			&::after {
				content: "";
				position: absolute;
				top: 50%;
				height: 4px;
				background-color: var(--color-rock-400);
				min-width: 18%;
				@include sm {
					width: 20%;
				}
			}
			&::after {
				right: 0;
			}
			.bars {
				&::before,
				&::after {
					content: "";
					position: absolute;
					left: 0;
					right: 0;
					height: 4px;
					margin: 0 auto;
					background-color: var(--color-rock-400);
				}
				&::before {
					top: var(--s-11);
					width: 50%;
				}
				&::after {
					top: calc(var(--s-11) + var(--s-8));
					width: 23%;
				}
			}
		}
		.bottom {
			height: 2px;
			width: 143%;
			transform: translateX(-15%) translateY(0px);
			margin: 0 auto;
			.left,
			.right {
				content: "";
				position: absolute;
				height: 6px;
				width: 74.7%;
			}
			.left {
				left: 0;
				transform: translateX(-29.7%) rotate(20deg);
				background: linear-gradient(
					90deg,
					transparent 0%,
					transparent 48.7%,
					var(--color-rock-200) 48.7%,
					var(--color-rock-200) 100%
				);
			}
			.right {
				transform: translateX(29.7%) rotate(-20deg);
				right: 0;
				background: linear-gradient(
					90deg,
					var(--color-rock-200) 0%,
					var(--color-rock-200) 51.2%,
					transparent 51.2%,
					transparent 100%
				);
			}
		}
		.blurb {
			text-align: center;
			font-size: 14px;
			width: 90%;
			padding: var(--s-8) 0;
			@include md {
				width: 88%;
			}
		}
		.h1-container {
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 125%;
			.h1-background {
				z-index: 5;
				background-color: var(--color-bg-primary);
				padding: 0 var(--s-8);
				h1 {
					position: relative;
					padding: 0 var(--s-4) var(--s-3) var(--s-4);
					font-size: 10vw;
					font-family: var(--font-body);
					color: var(--color-rock-100);
					font-weight: 800;
					letter-spacing: -2px;
					border: dashed var(--color-rock-400);
					border-width: 5px 0 5px 0;
					@include sm {
						font-size: calc(var(--text-lg) + 15px);
					}
				}
			}

			.line-background {
				z-index: 1;
				position: absolute;
				right: 6%;
				width: 88%;
				height: 100%;
				background-color: var(--color-bg-primary);
			}
			.line {
				content: "";
				z-index: 2;
				position: absolute;
				width: 100%;
				height: 7px;
				top: 43%;
				bottom: 50%;
				background-color: var(--color-rock-200);
				&::before,
				&::after {
					content: "";
					position: absolute;
					background-color: var(--color-bg-primary);
					width: 2%;
					height: 100%;
					bottom: 0;
				}
				&::before {
					left: 3%;
				}
				&::after {
					right: 3%;
				}
			}
		}
		.intro {
			position: relative;
			height: var(--s-9);
			width: 80%;
			margin: var(--s-9) auto var(--s-7) auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.mustache {
				z-index: 3;
				width: 60px;
				filter: var(--icon-filter);
				@include sm {
					width: 90px;
				}
			}
			.mask {
				z-index: 0;
				position: absolute;
				width: 100%;
				height: 150%;
				margin: auto 0;
				overflow: hidden;
				img {
					position: absolute;
					width: 600px;
					height: 100%;
					top: 0;
					object-fit: cover;
					opacity: var(--opacity-pencilbg);
				}
			}
		}
		.container {
			position: relative;
			margin: 0 auto;
			background-color: var(--color-bg-primary);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			max-width: 500px;
			width: 90%;
			border: 6px var(--color-rock-200);
			border-style: solid solid none solid;
			@include sm {
				width: 80%;
			}
		}
	}
</style>
