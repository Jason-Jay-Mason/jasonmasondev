<script lang="ts">
	import type { GridLinkData } from "$lib/types"
	import { AnimatedGridLink } from "$lib/components"

	export let link: GridLinkData
	$: ({ headline, hook, href } = link)
</script>

<a {href}>
	<AnimatedGridLink {headline} {hook}>
		<div class="mock-window">
			<div class="window-bar">
				<div class="window-icons" />
				<div class="window-icons" />
				<div class="window-icons" />
			</div>

			<div class="app-bar">
				<div class="hamburger" />
				<div class="user-icon" />
			</div>

			<div class="mock-interface">
				<div class="mock-nav">
					<div class="bars">
						<div class="bar-1" />
						<div class="bar-2" />
						<div class="bar-3" />
						<div class="bar-4" />
					</div>
					<div class="settings">
						<div class="user-icon" />
						<div class="details" />
					</div>
				</div>

				<div class="center">
					<div class="slider-container">
						<div class="slider">
							<div class="item" />
							<div class="item" />
							<div class="item" />
							<div class="item" />
						</div>
						<div class="button-container">
							<div class="next-button" />
						</div>
					</div>

					<div class="content-box" />
					<div class="content-box" />
				</div>
				<div class="right">
					<div class="content-box" />
					<div class="content-box" />
				</div>
			</div>
		</div>
	</AnimatedGridLink>
</a>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.mock-window {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		height: 75%;
		width: 80%;
		border: solid 2px var(--color-rock-200);
		.window-bar {
			position: relative;
			top: 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 10%;
			padding-left: var(--s-3);
			background-color: var(--color-rock-700);
			.window-icons {
				position: relative;
				width: 10px;
				height: 10px;
				margin: 0 var(--s-1);
				border-radius: 100px;
				border: solid 1px var(--color-rock-200);
				background-color: var(--color-bg-primary);
			}
		}
		.app-bar {
			position: relative;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			height: var(--s-7);
			background-color: var(--color-rock-600);
			padding: 0 var(--s-3);
			.hamburger {
				position: relative;
				width: 20px;
				height: 8px;
				&::before,
				&::after {
					content: "";
					position: absolute;
					left: 50%;
					height: 2px;
					width: 10px;
					background-color: var(--color-rock-200);
				}
				&::after {
					bottom: 0;
					transform: rotate(45deg) translate(-4px, 0);
				}
				&::before {
					transform: rotate(-45deg) translate(-4px, 0);
				}
			}
			.user-icon {
				width: 10px;
				height: 10px;
				border-radius: 10px;
				background-color: var(--color-rock-300);
			}
		}
		.mock-interface {
			position: relative;
			display: grid;
			grid-template-columns: 2fr 3fr;
			width: 100%;
			height: 100%;
			background-color: var(--color-bg-primary);
			@include xs {
				grid-template-columns: 1.5fr 3fr 2fr;
			}
			.mock-nav {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				background-color: var(--color-rock-800);
				padding: 10%;
				.bars {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
					opacity: 1;
					@for $i from 1 to 5 {
						.bar-#{$i} {
							height: var(--s-4);
							width: #{(random(20) + 80) * 1%};
							margin-bottom: var(--s-3);
							background-color: var(--color-rock-#{$i + 3}00);
						}
					}
				}
				.settings {
					display: flex;
					flex-direction: row;
					width: 90%;
					opacity: 1;
					.user-icon {
						height: 10px;
						width: 20%;
						border-radius: 100px;
						margin-right: 10%;
						background-color: var(--color-rock-400);
					}
					.details {
						height: 100%;
						width: 90%;
						background-color: var(--color-rock-400);
					}
				}
			}
		}
		.center {
			position: relative;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 2fr;
			gap: var(--s-4);
			padding: var(--s-5) var(--s-5);
			overflow: hidden;
			.slider-container {
				transform: translateX(-20%);
				display: flex;
				flex-direction: row;
				width: 130%;
				margin-bottom: 2%;
				.slider {
					display: flex;
					flex-direction: row;
					gap: var(--s-4);
					width: 100%;
					.item {
						width: 100%;
						height: 100%;
					}
					@for $i from 1 to 5 {
						:nth-child(#{$i}) {
							background-color: var(--color-rock-#{$i + 3}00);
						}
					}
					:first-child {
						opacity: 0;
					}
				}
				.button-container {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 20%;
					height: 100%;
					.next-button {
						height: 14px;
						width: 14px;
						border-radius: 100px;
						background-color: var(--color-rock-200);
					}
				}
			}
		}
		.right {
			display: none;
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr;
			gap: var(--s-4);
			padding: var(--s-5) var(--s-5) var(--s-5) 0;
			@include xs {
				display: grid;
			}
		}
		.content-box {
			border: solid 2px var(--color-rock-400);
		}
	}

	//animations

	$length: 8s;
	@keyframes frame-2 {
		0%,
		25% {
			opacity: 1;
		}
		27%,
		75% {
			opacity: 0;
		}
		77%,
		100% {
			opacity: 1;
		}
	}
	@keyframes frame-1 {
		0%,
		25% {
			opacity: 0;
		}
		27%,
		75% {
			opacity: 1;
		}
		77%,
		100% {
			opacity: 0;
		}
	}
	@keyframes slider {
		0%,
		25% {
			transform: translateX(0);
		}
		27%,
		75% {
			transform: translateX(25%);
		}
		77%,
		100% {
			transform: translateX(0);
		}
	}

	@keyframes hamburger-b {
		0% {
			transform: rotate(-45deg) translate(-4px, 0);
		}
		2% {
			transform: rotate(0) translateX(0);
		}
		60% {
			transform: rotate(0) translateX(0);
		}
		62%,
		100% {
			transform: rotate(-45deg) translate(-4px, 0);
		}
	}

	@keyframes hamburger-a {
		0% {
			transform: rotate(45deg) translate(-4px, 0);
		}
		3% {
			transform: rotate(0) translateY(0);
		}
		60% {
			transform: rotate(0) translateY(0);
		}
		62%,
		100% {
			transform: rotate(45deg) translate(-4px, 0);
		}
	}

	@keyframes mock-nav {
		3% {
			opacity: 1;
		}
		5% {
			opacity: 0;
		}
		60% {
			opacity: 0;
		}
		63%,
		100% {
			opacity: 1;
		}
	}

	@keyframes mock-interface {
		0% {
			grid-template-columns: 1.5fr 3fr 2fr;
		}
		5% {
			grid-template-columns: 0fr 2fr 2fr;
		}
		60% {
			grid-template-columns: 0fr 2fr 2fr;
		}
		65%,
		100% {
			grid-template-columns: 1.5fr 3fr 2fr;
		}
	}
	@keyframes right {
		25% {
			grid-template-rows: 1fr 1fr;
		}
		35% {
			grid-template-rows: 1fr 2fr;
		}
		75% {
			grid-template-rows: 1fr 2fr;
		}
		85%,
		100% {
			grid-template-rows: 1fr 1fr;
		}
	}
	@keyframes center {
		0% {
			grid-template-rows: 1fr 1fr 2fr;
		}
		10% {
			grid-template-rows: 1fr 2fr 1fr;
		}
		50% {
			grid-template-rows: 1fr 2fr 1fr;
		}
		60%,
		100% {
			grid-template-rows: 1fr 1fr 2fr;
		}
	}

	.slider {
		animation: slider 16s linear infinite;
		:first-child {
			animation: frame-1 16s linear infinite;
		}
		:last-child {
			animation: frame-2 16s linear infinite;
		}
	}
	a:hover {
		.right {
			animation: right $length linear infinite;
		}
		.center {
			animation: center $length linear infinite;
		}

		.hamburger {
			&::after {
				animation: hamburger-a $length linear infinite;
			}
			&::before {
				animation: hamburger-b $length linear infinite;
			}
		}
		.mock-nav {
			animation: mock-nav $length linear infinite;
		}
		.mock-interface {
			animation: mock-interface $length linear infinite;
		}
	}
</style>
