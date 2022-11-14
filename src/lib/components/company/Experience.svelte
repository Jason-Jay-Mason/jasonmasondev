<script lang="ts">
	import type { Experience } from '$lib/types';
	import LargeHeadline from '../LargeHeadline.svelte';
	import AnimationFrame from '$lib/components/AnimationFrame.svelte';
	import { getStyleValue } from '$lib/utils';

	export let data: Experience;

	let progress: number;
	let storedYear: number;

	function getDate(date: number) {
		if (date > 2022) {
			date = 2022;
		}
		if (date < 2013) {
			date = 2013;
		}
		storedYear = date;

		return date;
	}
</script>

<section id="experience">
	<LargeHeadline main={data.headline.main} sub={data.headline.sub} />
	<div class="desktop">
		<AnimationFrame frameHeight="300vh" bind:progress classes="">
			<!-- <div style="position:absolute;">{progress}</div> -->
			<div class="main-container">
				<div class="main-grid">
					<div class="work-details">
						<div class="work-container">
							<div class="date">
								<p>{getDate(Math.floor((progress - 0.3) * 1.4 * 9 + 2013))}</p>
							</div>
							<div class="dot" />
							<div class="details-container">
								{#each data.records as record}
									{#if record.startYear <= storedYear && record.endYear >= storedYear}
										<div
											class="details"
											style={`opacity:${getStyleValue(
												progress,
												record.fadeIn.start,
												record.fadeIn.length,
												record.fadeIn.startValue,
												record.fadeIn.endValue
											)}`}
										>
											<h4>{record.headline.main}</h4>
											<h5>{record.headline.sub}</h5>
											<p class="blurb">{record.description}</p>
										</div>
									{/if}
								{/each}
							</div>
						</div>
					</div>
					<div class="skills-grid">
						<div class="labels">
							<p>Novice</p>
							<p>Expert</p>
						</div>
						{#each data.skills as skill}
							{#each skill.growth as animationFrame, i}
								{#if data.records[i].startYear <= storedYear && data.records[i].endYear >= storedYear}
									<div class="skill">
										<p class="skill-title">{skill.title}</p>
										<div class="bar">
											<div class="lower">
												<img src="/pencil-bg.svg" class="pencil-bg" />
											</div>
											<div
												class="upper"
												style={`width:${getStyleValue(
													progress,
													animationFrame.start,
													animationFrame.length,
													animationFrame.startValue,
													animationFrame.endValue
												)}%`}
											/>
										</div>
									</div>
								{/if}
							{/each}
						{/each}
					</div>
				</div>
			</div>
		</AnimationFrame>
		<div class="line">
			<div />
		</div>
	</div>

	<div class="mobile">
		{#each data.records as record}
			<div
				class="details"
				style={`opacity:${getStyleValue(
					progress,
					record.fadeIn.start,
					record.fadeIn.length,
					record.fadeIn.startValue,
					record.fadeIn.endValue
				)}`}
			>
				<h4>{record.headline.main}</h4>
				<h5>{record.headline.sub}</h5>
				<p class="blurb">{record.description}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@import '../../theme/breakpoints.scss';
	section {
		position: relative;
		margin: 0 var(--s-7) var(--s-14) var(--s-7);
		@include md {
			margin: 0 var(--s-7) var(--s-13) var(--s-7);
		}
		h4,
		h5 {
			font-family: var(--font-headline);
			color: var(--color-rock-100);
			letter-spacing: 0.045em;
			line-height: 120%;
			padding-bottom: var(--s-4);
		}
		h4 {
			font-size: calc(var(--text-md) + 3px);
			font-weight: 700;
		}
		h5 {
			font-size: calc(var(--text-md) - 1px);
			font-weight: 400;
			padding-bottom: var(--s-4);
		}
		.mobile {
			display: block;
			@include md {
				display: none;
			}
			.details {
				margin: var(--s-10) 0;
			}
		}
		.desktop {
			display: none;
			@include md {
				display: block;
			}
		}
		.main-container {
			max-width: $xxl;
			position: relative;
			height: 100vh;
			min-height: 720px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: -17vh auto 0 auto;
			.main-grid {
				display: grid;
				align-items: center;
				grid-template-columns: 1fr;
				width: 100%;
				margin: 0 var(--s-4) 0 0;
				@include md {
					margin: 0 var(--s-7);
					grid-template-columns: 1.5fr 1fr;
				}
				@include lg {
					grid-template-columns: 1.2fr 1fr;
				}
				.work-details {
					position: relative;
					height: fit-content;
					.work-container {
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-start;
						.date {
							position: relative;
							background-color: var(--color-rock-100);
							padding: var(--s-6) var(--s-6);
							@include lg {
								padding: var(--s-7) var(--s-6);
							}
							&::before {
								content: '';
								position: absolute;
								width: 0px;
								height: 0px;
								border: 13px solid transparent;
								border-left-color: var(--color-rock-100);
								top: 50%;
								left: 100%;
								transform: translateY(-50%);
								@include md {
									border: 15px solid transparent;
									border-left-color: var(--color-rock-100);
								}
								@include lg {
									border: 21px solid transparent;
									border-left-color: var(--color-rock-100);
								}
							}
							p {
								color: var(--color-bg-primary);
								font-size: calc(var(--text-md) - 1);
								line-height: 0;
								font-family: var(--font-headline);
								@include lg {
									font-size: var(--text-md);
								}
							}
						}
						.dot {
							content: '';
							position: relative;
							display: none;
							z-index: 1;
							width: 15%;
							height: 100%;
							@include md {
								display: inline;
							}
							@include lg {
								width: 20%;
							}
							&::before {
								content: '';
								position: absolute;
								width: var(--s-6);
								height: var(--s-6);
								top: 50%;
								left: 50%;
								transform: translate(-20%, -50%);
								border-radius: 1000px;
								background-color: var(--color-rock-100);
							}
						}
						.details-container {
							width: 100%;
							position: relative;
							margin-left: var(--s-7);
							@include md {
								width: 90%;
								margin-left: 0;
							}
							@include lg {
								width: 80%;
							}
							.details {
								position: absolute;
								top: 50%;
								transform: translateY(-50%);
								h4,
								h5 {
									font-family: var(--font-headline);
									color: var(--color-rock-100);
									letter-spacing: 0.045em;
									line-height: 120%;
									padding-bottom: var(--s-4);
								}
								h4 {
									font-size: calc(var(--text-md) + 3px);
									font-weight: 700;
								}
								h5 {
									font-size: calc(var(--text-md) - 1px);
									font-weight: 400;
									padding-bottom: var(--s-4);
								}
							}
						}
					}
				}
				.skills-grid {
					position: relative;
					display: none;
					grid-template-columns: 1fr;
					justify-items: end;
					align-items: center;
					row-gap: var(--s-7);
					height: fit-content;
					@include md {
						display: grid;
					}
					@include lg {
						grid-template-columns: 1fr 1fr;
					}
					.labels {
						color: var(--color-rock-100);
						position: absolute;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						width: 50%;
						right: 0;
						top: -5%;
						font-size: var(--text-sm);
						@include lg {
							width: 27%;
							left: 25%;
							top: -10%;
						}
					}
					.skill {
						position: relative;
						display: flex;
						flex-direction: row;
						align-items: center;
						justify-content: flex-end;
						height: 23px;
						width: 95%;
						.skill-title {
							font-family: var(--font-headline);
							text-transform: uppercase;
							font-size: calc(var(--text-sm) + 2px);
							margin-right: var(--s-5);
							text-align: right;
							width: 50%;
						}
						.bar {
							position: relative;
							height: 100%;
							width: 50%;
							border-radius: 100px;
							overflow: hidden;
							.lower {
								.pencil-bg {
									position: absolute;
									object-fit: cover;
									width: 600px;
								}
							}
							.upper {
								content: '';
								position: absolute;
								object-fit: cover;
								background-color: var(--color-rock-100);
								height: 100%;
								top: 0;
								border-radius: 100px 0 0 100px;
							}
						}
					}
				}
			}
		}
		.line {
			position: relative;
			margin: 0 auto;
			max-width: $xxl;
			div {
				z-index: -1;
				position: relative;
				margin: 0 var(--s-3) 0 var(--s-3);
				@include md {
					margin: 0 var(--s-7) 0 calc(var(--s-7) + 59px);
				}
				@include lg {
					margin: 0 var(--s-7) 0 calc(var(--s-7) + 89px);
				}
				&::after {
					content: '';
					height: 240vh;
					width: 2px;
					background-color: var(--color-rock-100);
					position: absolute;
					bottom: 25vh;
					left: 4.75%;
				}
			}
		}
	}
</style>
