<script lang="ts">
	import type { Cta } from '$lib/types';
	import Button from '$lib/components/Button.svelte';
	export let hook: string;
	export let cta: Cta;
	export let logo: string;
</script>

<section class="section" id="top">
	<div class="container">
		<div class="intro"><h1>Jason's webumé</h1></div>
		<div class="logo-container">
			<div class="logo">
				<img src={logo} alt="" />
			</div>
			<div class="line" />
		</div>
		<div class="blurb">
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text
			</p>
		</div>
		<div class="cta-container">
			<div class="cta">
				<Button href={cta.hrefOrSrc}>Let's Talk</Button>
			</div>
		</div>
		<div class="bottom">
			<div class="left" />
			<div class="right" />
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../theme/breakpoints.scss';
	section {
		overflow: hidden;
		position: relative;
		width: 100%;
		padding: var(--s-10) 0 var(--s-11) 0;
		@include sm {
			padding: var(--s-11) var(--s-4) var(--s-13) var(--s-4);
		}
		.cta-container {
			padding-top: var(--s-7);
			margin-bottom: var(--s-9);
			position: relative;
			width: 87%;
			@include md {
				width: 70%;
				margin-bottom: var(--s-4);
			}
			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 55%;
				height: 5px;
				width: 20%;
				background-color: var(--color-rock-200);
			}
			&::after {
				right: 0;
			}
			.cta {
				position: relative;
				margin: 0 auto;
				padding: 0 var(--s-6);
				width: 60%;
				background-color: var(--color-bg-primary);
				z-index: 1;
				@include sm {
					width: 45%;
				}
				&::before,
				&::after {
					z-index: -1;
					content: '';
					position: absolute;
					margin: 0 auto;
					left: 0;
					right: 0;
					height: 2px;
					background-color: var(--color-rock-200);
				}
				&::before {
					top: var(--s-11);
					width: 83%;
				}
				&::after {
					top: calc(var(--s-11) + var(--s-7));
					width: 43%;
				}
			}
		}
		.bottom {
			position: relative;
			height: 1px;
			width: 143%;
			transform: translateX(-15%) translateY(-2px);
			margin: 0 auto;
			&::before,
			&::after {
				content: '';
				position: absolute;
				height: 3px;
				width: 65%;
			}
			&::before {
				left: 0;
				transform: translateX(-18.1%) translateY(-5px) rotate(25deg);
				background: linear-gradient(
					90deg,
					transparent 0%,
					transparent 48.7%,
					var(--color-rock-200) 48.7%,
					var(--color-rock-200) 100%
				);
			}
			&::after {
				transform: translateX(18.1%) translateY(-5px) rotate(-25deg);
				right: 0;
				background: linear-gradient(
					90deg,
					var(--color-rock-200) 0%,
					var(--color-rock-200) 51.2%,
					transparent 51.2%,
					transparent 100%
				);
			}
			.left,
			.right {
				content: '';
				position: absolute;
				height: 4px;
				width: 76.7%;
			}
			.left {
				left: 0;
				transform: translateX(-30%) rotate(25deg);
				background: linear-gradient(
					90deg,
					transparent 0%,
					transparent 48.7%,
					var(--color-rock-200) 48.7%,
					var(--color-rock-200) 100%
				);
			}
			.right {
				transform: translateX(30%) rotate(-25deg);
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
			width: 90%;
			text-align: center;
			padding: 0;
			padding: var(--s-8) 0;
			@include md {
				width: 80%;
			}
		}
		.logo-container {
			position: relative;
			display: flex;
			background-color: var(--color-bg-primary);
			width: 120%;
			.logo {
				width: 70%;
				display: flex;
				align-items: center;
				justify-content: center;
				z-index: 1;
				margin: 0 auto;
				background-color: var(--color-bg-primary);
				padding: 0 var(--s-3);
				@include md {
					padding: 0 var(--s-7);
				}
				img {
					filter: var(--icon-filter);
					width: 90%;
				}
			}
			.line {
				content: '';
				position: absolute;
				width: 100%;
				height: 7px;
				top: 43%;
				bottom: 50%;
				background-color: var(--color-rock-200);
				&::before,
				&::after {
					content: '';
					position: absolute;
					background-color: var(--color-bg-primary);
					width: 2%;
					height: 200%;
					top: -50%;
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
			width: 90%;
			font-size: calc(var(--text-lg) + 1px);
			color: var(--color-rock-200);
			font-family: var(--font-subheadline);
			text-align: center;
			transform: rotate(-2deg);
			margin: var(--s-7) auto var(--s-4) auto;
			@include sm {
				font-size: calc(var(--text-lg) + 4px);
			}
			@include md {
				font-size: calc(var(--text-lg) + 10px);
			}
			&::before {
				content: '';
				transform: rotate(2deg);
				height: 45%;
				width: 100%;
				z-index: -1;
				top: 20%;
				bottom: 0;
				left: 0;
				right: 0;
				position: absolute;
				opacity: var(--opacity-pencilbg);
				background-size: 300%;
				background-image: url('/pencil-bg.svg');
			}
		}
		.container {
			margin: 0 auto var(--s-13) auto;
			width: 85%;
			max-width: 587px;
			border: 4px var(--color-rock-200);
			border-style: solid solid none solid;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
