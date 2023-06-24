<script lang="ts">
	import { AnimatedGridLink } from "$lib/components"
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	const { headline, hook, href } = link
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
				<div class="hamburber" />
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

				<div class="center" />
				<div class="right" />
			</div>
		</div>
	</AnimatedGridLink>
</a>

<style lang="scss">
	.mock-window {
		position: relative;
		display: flex;
		flex-direction: column;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 80%;
		width: 80%;
		border: solid 2px var(--color-rock-200);
		.window-bar {
			position: relative;
			display: flex;
			flex-direction: row;
			align-items: center;
			top: 0;
			background-color: var(--color-rock-700);
			height: 10%;
			padding-left: var(--s-3);
			.window-icons {
				position: relative;
				width: 10px;
				height: 10px;
				border-radius: 100px;
				margin: 0 var(--s-1);
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
			background-color: var(--color-rock-600);
			height: var(--s-7);
			padding: 0 var(--s-3);
			.hamburber {
				position: relative;
				width: 20px;
				height: 8px;
				&::before,
				&::after {
					content: "";
					position: absolute;
					height: 2px;
					width: 10px;
					left: 50%;
					transform: translateX(-50%);
					background-color: var(--color-rock-200);
				}
				&::after {
					bottom: 0;
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
			grid-template-columns: 1.5fr 2fr 2fr;
			width: 100%;
			height: 100%;
			background-color: var(--color-bg-primary);
			.mock-nav {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				background-color: var(--color-rock-800);
				padding: var(--s-6) var(--s-4);
				.bars {
					opacity: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;
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
					opacity: 1;
					display: flex;
					flex-direction: row;
					width: 90%;
					.user-icon {
						height: 8px;
						width: 10px;
						border-radius: 100px;
						margin-right: var(--s-3);
						background-color: var(--color-rock-400);
					}
					.details {
						height: 100%;
						width: 100%;
						background-color: var(--color-rock-400);
					}
				}
			}
		}
		.center {
			background-color: blue;
		}
		.right {
			background-color: green;
		}
	}
</style>
