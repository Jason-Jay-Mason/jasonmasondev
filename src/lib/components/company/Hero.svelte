<script lang="ts">
	import type { Cta } from '$lib/types';
	import Button from '$lib/components/Button.svelte';
	export let hook: string;
	export let cta: Cta;
	export let logo: string;
</script>

<section class="section" id="top">
	<div class="container">
		<div class="intro">
			<div class="mask">
				<img src="/pencil-bg.svg" alt="Stylized background" />
			</div>
			<h1>Jason's webumé</h1>
		</div>
		<div class="logo-container">
			<div class="logo">
				<img src={logo} alt="Company Logo" />
			</div>
			<div class="line" />
		</div>
		<div class="blurb">
			<p>
				{hook}
			</p>
		</div>
		<div class="cta-container">
			<div class="cta">
				<Button href={cta.hrefOrSrc} width="full">Let's Talk</Button>
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
		padding: var(--s-10) 0 var(--s-11) 0;
		@include sm {
			padding: var(--s-12) var(--s-4) var(--s-13) var(--s-4);
		}
		.cta-container {
			position: relative;
			width: 87%;
			margin-bottom: var(--s-9);
			@include md {
				width: 70%;
				margin-bottom: var(--s-6);
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
				width: 80%;
				max-width: 200px;
				z-index: 1;
				margin: 0 auto;
				padding: 0 var(--s-6);
				background-color: var(--color-bg-primary);
				@include sm {
					width: 50%;
				}
				&::before,
				&::after {
					z-index: -1;
					content: '';
					position: absolute;
					left: 0;
					right: 0;
					height: 2px;
					margin: 0 auto;
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
			text-align: center;
			width: 90%;
			padding: var(--s-9) 0;
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
				display: flex;
				align-items: center;
				justify-content: center;
				width: 70%;
				z-index: 1;
				margin: 0 auto;
				padding: 0 var(--s-3);
				background-color: var(--color-bg-primary);
				@include md {
					padding: 0 var(--s-7);
				}
				img {
					max-height: var(--s-11);
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
			margin: var(--s-7) auto var(--s-4) auto;
			.mask {
				position: absolute;
				width: 100%;
				height: 40%;
				top: 27%;
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
			h1 {
				text-align: center;
				transform: rotate(-1deg);
				font-size: calc(var(--text-xl) + 1px);
				color: var(--color-rock-200);
				font-family: var(--font-subheadline);
				@include sm {
					font-size: calc(var(--text-xl) + 4px);
				}
				@include md {
					font-size: calc(var(--text-xl) + 10px);
				}
			}
		}
		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 85%;
			max-width: 587px;
			border: 4px var(--color-rock-200);
			border-style: solid solid none solid;
			margin: 0 auto var(--s-13) auto;
		}
	}
</style>
