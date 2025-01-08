<script lang="ts">
	import type { HeroData } from "$lib/types"
	import { Button } from "$lib/components"

	export let data: HeroData
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
				<h1>{data.headline}</h1>
			</div>
			<div class="line" />
			<div class="line-background" />
		</div>
		<div class="blurb">
			<h2>
				{data.hook}
			</h2>
		</div>
		<div class="cta-container">
			<div class="row">
				<div class="bar" />
				<div class="cta">
					<Button href={data.cta.hrefOrSrc} width="full">{data.cta.innerText}</Button>
				</div>
				<div class="bar" />
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
	@import "../../theme/breakpoints.scss";
	section {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
		padding: var(--s-13) var(--s-4) var(--s-15) var(--s-4);
		@include sm {
			padding: clamp(200px, 20vh, 230px) var(--s-4) var(--s-15) var(--s-4);
		}
		.cta-container {
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: var(--s-7);
			width: 78vw;
			max-width: 400px;
			margin-bottom: 10px;
			@include sm {
				width: 75%;
				margin-bottom: -2px;
			}
			.bars,
			&::after {
				content: "";
				background-color: var(--color-rock-400);
				height: 5px;
			}
			.bars {
				width: 50%;
			}
			&::after {
				width: 20%;
			}
			.row {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				width: 100%;
				.bar {
					width: 15%;
					height: 5px;
					background: var(--color-rock-400);
				}
				.cta {
					z-index: 11;
					position: relative;
					width: 100%;
					max-width: 230px;
					padding: 0 var(--s-6);
					@include sm {
						padding: 0 var(--s-6);
						width: 80%;
					}
				}
			}
		}
		.bottom {
			transform: translateX(-15%) translateY(0px);
			height: 2px;
			width: 143%;
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
			font-size: 14px;
			text-align: center;
			width: 90%;
			padding: var(--s-8) 0;
			h2 {
				font-family: var(--font-body);
				font-style: normal;
				font-weight: 300;
				font-size: var(--text-base);
				line-height: 150%;
				letter-spacing: 0.07em;
			}
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
				padding: 0 var(--s-8);
				background-color: var(--color-bg-primary);
				h1 {
					position: relative;
					font-size: 10vw;
					font-family: var(--font-body);
					font-weight: 800;
					letter-spacing: -2px;
					text-transform: uppercase;
					color: var(--color-rock-100);
					padding: 0 var(--s-4) var(--s-3) var(--s-4);
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
				top: 43%;
				bottom: 50%;
				width: 100%;
				height: 7px;
				background-color: var(--color-rock-200);
				&::before,
				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					width: 2%;
					height: 100%;
					background-color: var(--color-bg-primary);
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
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			height: var(--s-9);
			width: 80%;
			margin: var(--s-9) auto var(--s-7) auto;
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
					top: 0;
					width: 600px;
					height: 100%;
					object-fit: cover;
					opacity: var(--opacity-pencilbg);
				}
			}
		}
		.container {
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 90%;
			max-width: 500px;
			margin: 0 auto;
			background-color: var(--color-bg-primary);
			border: 6px var(--color-rock-200);
			border-style: solid solid none solid;
			@include sm {
				width: 80%;
			}
		}
	}
</style>
