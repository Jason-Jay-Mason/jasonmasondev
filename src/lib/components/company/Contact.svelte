<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import { fade } from 'svelte/transition';
	import LargeHeadline from '../LargeHeadline.svelte';

	let formValues = {
		fname: {
			valid: false,
			value: ''
		},
		lname: {
			valid: false,
			value: ''
		},
		email: {
			valid: false,
			value: ''
		},
		phone: {
			valid: false,
			value: ''
		},
		message: {
			valid: false,
			value: ''
		}
	};

	// $: formValid = !Object.values(formValues).some(({ valid }) => valid === false);

	let success: boolean = false;
	const formUrl = 'https://submit-form.com/nZtmp841';
	let loading = false;
	let formError: string | null = null;
	async function handleSubmit() {
		loading = true;
		try {
			const res = await fetch(formUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(formValues)
			});
			loading = false;
			success = true;
		} catch (err) {
			loading = false;
			formError = 'It looks like there was a problem with this form. You can always call though!';
			console.error(err);
		}
	}
</script>

<section id="contact">
	<div class="form">
		<form on:submit|preventDefault={handleSubmit} class="">
			<div class="field-row">
				<div class="right">
					<Input
						placeholder="First Name"
						type="text"
						bind:value={formValues.fname.value}
						bind:valid={formValues.fname.valid}
					/>
				</div>
				<div class="left">
					<Input
						placeholder="Last Name"
						type="text"
						bind:value={formValues.lname.value}
						bind:valid={formValues.lname.valid}
					/>
				</div>
			</div>

			<div class="field-row">
				<div class="right">
					<Input
						placeholder="Email"
						type="email"
						bind:value={formValues.email.value}
						bind:valid={formValues.email.valid}
					/>
				</div>
				<div class="left">
					<Input
						placeholder="Phone"
						type="phone"
						bind:value={formValues.phone.value}
						bind:valid={formValues.phone.valid}
					/>
				</div>
			</div>

			<Input
				placeholder="message"
				type="text-area"
				bind:value={formValues.message.value}
				bind:valid={formValues.message.valid}
			/>
			{#if formError}
				<p transition:fade class="status-message">{formError}</p>
			{:else if success}
				<p transition:fade class="status-message">Message success! I'll contact you ASAP!</p>
			{:else}
				<div>
					<Button type="submit">
						{#if loading}
							<Spinner />
							Please wait...
						{:else}
							Send it!
						{/if}
					</Button>
				</div>
			{/if}
		</form>
	</div>
	<div class="info">
		<div class="container">
			<div class="item">
				<img src="/phone-icon.svg" alt="phont icon" />
				<p>+1(253) 651 8568</p>
			</div>
			<div class="item">
				<img src="/mail-icon.svg" alt="mail icon" />
				<p>jason@jamsite.agency</p>
			</div>
			<div class="item">
				<img src="/location-icon.svg" alt="location icon" />
				<p>CHEYENNE, WY</p>
			</div>
			<div class="hours">
				<p>
					MONDAY - FRIDAY<br />
					12:00PM-1:00PM & 5:00PM-9:00PM MT
				</p>
			</div>
			<div class="hours">
				<p>
					SATURDAY - SUNDAY<br /> 12:00PM-9:00PM MT
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../theme/breakpoints.scss';
	section {
		margin: 0 auto;
		display: flex;
		max-width: $sm;
		flex-direction: column-reverse;
		padding: var(--s-11) var(--s-5);
		@include md {
			padding: var(--s-14) var(--s-5) var(--s-14) var(--s-5);
			max-width: $xl;
			flex-direction: row;
		}
		.info {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			font-size: calc(var(--text-base));
			@include md {
				width: 50%;
				align-items: center;
			}
			.container {
				display: flex;
				justify-content: center;
				flex-direction: column;
				height: 100%;
				p {
					font-size: var(--text-base);
					text-transform: uppercase;
					font-family: var(--font-headline);
					letter-spacing: 0.105em;
				}
			}
			.hours {
				margin-bottom: var(--s-8);
			}
			.item {
				display: flex;
				flex-direction: row;
				margin-bottom: var(--s-9);
				img {
					filter: var(--icon-filter);
					margin-right: var(--s-4);
					height: var(--s-8);
					@include md {
						margin-right: var(--s-8);
					}
				}
			}
		}

		.form {
			text-align: center;
			width: 100%;
			margin: 0 auto;
			padding: var(--s-1);
			position: relative;
			@include md {
				padding: var(--s-4);
				width: 50%;
			}
			.status-message {
				position: absolute;
				font-size: var(--text-md);
				width: 100%;
				text-align: center;
			}
			.field-row {
				padding-bottom: var(--s-3);
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				.left,
				.right {
					width: 49%;
				}
			}
		}
	}
</style>
