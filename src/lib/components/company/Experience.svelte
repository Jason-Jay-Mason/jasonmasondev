<script lang="ts">
	import type { Experience } from '$lib/types';
	import LargeHeadline from '../LargeHeadline.svelte';
	import AnimationFrame from '$lib/components/AnimationFrame.svelte';
	import { onMount } from 'svelte';
	import { getStyleValue } from '$lib/utils';

	export let data: Experience;

	//Keep the progress through the animation frame in state. For more info check the AnimationFrame component
	let progress: number = 0;

	//We want to automatically update the end date so I don't have to later
	const date = new Date();
	const thisYear = date.getFullYear();

	//Simple helper function to get the date as a round year for display in the side bar
	function getDate(date: number) {
		if (date > thisYear) {
			date = thisYear;
		}
		// 2013 is somewhat arbitrary minimum. It is the first date of me working professionally
		//because of this we don't want the date to go below 2013
		if (date < 2013) {
			date = 2013;
		}
		return date;
	}

	// We need to keep track of when each record should fade in
	// We use -10 for the first element because
	// I want it visible when the user reaches its scroll position
	// -10 is arbitrary the main idea is I just want a large number for the first record
	let recordStartPercentOfFrame: number[] = [-10];
	onMount(() => {
		// For each record, compute when the fade in anamtion should occure
		const totalYears = thisYear - 2013;
		//The percent of the next frame depends on the last one so we declare an accumulator here
		//I could use previous index but I think this is more legible
		let acc = 0;
		for (let i = 0; i < data.records.length - 1; i++) {
			const record = data.records[i];
			const percentOfTotal = (record.endYear - record.startYear) / totalYears;
			acc += percentOfTotal;
			recordStartPercentOfFrame.push(acc);
		}
	});

	// Returns the total animation duration for the kth skill bar and ith record
	function getSkillLength(i: number) {
		switch (i) {
			case 0:
				return recordStartPercentOfFrame[1];
			case data.records.length - 1:
				return 1 - recordStartPercentOfFrame[i];
			default:
				return recordStartPercentOfFrame[i + 1] - recordStartPercentOfFrame[i];
		}
	}
</script>

<section id="experience">
	<LargeHeadline main={data.headline.main} sub={data.headline.sub} />
	<div class="desktop">
		<AnimationFrame frameHeight="500vh" bind:progress classes="">
			<!-- <div style="position:absolute;">{(progress - 0.3) * 1.5}</div> -->
			<div class="main-container">
				<div class="main-grid">
					<div class="work-details">
						<div class="work-container">
							<div class="date">
								<p>{getDate(Math.floor((progress - 0.3) * 1.5 * 10 + 2013))}</p>
							</div>
							<div class="dot" />
							<div class="details-container">
								{#each data.records as record, i}
									{#if (progress - 0.3) * 1.5 > recordStartPercentOfFrame[i] && (i == data.records.length - 1 || (progress - 0.3) * 1.5 < recordStartPercentOfFrame[i + 1])}
										<div
											class="details"
											style={`opacity:${getStyleValue(
												progress,
												i == 0 ? 0 : recordStartPercentOfFrame[i],
												0.1,
												0,
												1
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
								{#if (progress - 0.3) * 1.5 > recordStartPercentOfFrame[i] && (i == data.records.length - 1 || (progress - 0.3) * 1.5 < recordStartPercentOfFrame[i + 1])}
									<div class="skill">
										<p class="skill-title">{skill.title}</p>
										<div class="bar">
											<div class="lower">
												<img src="/pencil-bg.svg" class="pencil-bg" alt="Stylized background" />
											</div>
											<div
												class="upper"
												style={`width:${getStyleValue(
													(progress - 0.3) * 1.5,
													i == 0 ? 0 : recordStartPercentOfFrame[i],
													getSkillLength(i),
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
		}
		.mobile {
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
			position: relative;
			height: 100vh;
			max-width: $xxl;
			min-height: 720px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: -17vh auto 0 auto;
			.main-grid {
				width: 100%;
				display: grid;
				align-items: center;
				grid-template-columns: 1fr;
				margin: 0 var(--s-4) 0 0;
				@include md {
					margin: 0 var(--s-7);
					grid-template-columns: 1.5fr 1fr;
				}
				@include lg {
					grid-template-columns: 1.2fr 1fr;
				}
				.work-details {
					.work-container {
						display: flex;
						align-items: center;
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
								top: 50%;
								left: 100%;
								transform: translateY(-50%);
								border: 13px solid transparent;
								border-left-color: var(--color-rock-100);
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
								font-family: var(--font-headline);
								line-height: 0;
								@include lg {
									font-size: var(--text-md);
								}
							}
						}
						.dot {
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
					row-gap: var(--s-7);
					justify-items: end;
					align-items: center;
					@include md {
						display: grid;
					}
					@include lg {
						grid-template-columns: 1fr 1fr;
					}
					.labels {
						position: absolute;
						display: flex;
						justify-content: space-between;
						width: 50%;
						right: 0;
						top: -5%;
						font-size: var(--text-sm);
						color: var(--color-rock-100);
						@include lg {
							width: 27%;
							left: 25%;
							top: -10%;
						}
					}
					.skill {
						display: flex;
						align-items: center;
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
								height: 100%;
								top: 0;
								border-radius: 100px 0 0 100px;
								object-fit: cover;
								background-color: var(--color-rock-100);
							}
						}
					}
				}
			}
		}
		.line {
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
					position: absolute;
					height: 440vh;
					width: 2px;
					bottom: 25vh;
					left: 4.75%;
					background-color: var(--color-rock-100);
				}
			}
		}
	}
</style>
