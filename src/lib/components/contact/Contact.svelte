<script lang="ts">
	import type { Headline } from "$lib/types"
	import { FormInputTypes } from "$lib/types"
	import { LargeHeadline, Button, ContactInfo, Input } from "$lib/components"

	export let headline: Headline
	export let endPoint = "https://submit-form.com/nZtmp841"

	let form: HTMLFormElement
	let valid = false
	let loading = false
	let success = false
	let error = false

	async function handleSubmit(): Promise<void> {
		loading = true
		const formData = new FormData(form)
		const data = {
			first_name: formData.get("fname"),
			last_name: formData.get("lname"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			message: formData.get("message")
		}
		try {
			await fetch(endPoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(data)
			})
			success = true
		} catch (e) {
			console.error(e)
			error = true
		} finally {
			loading = false
		}
	}
</script>

<section id="contact">
	<LargeHeadline main={headline.main} sub={headline.sub} />

	<div class="form-area">
		<form
			bind:this={form}
			on:submit|preventDefault={handleSubmit}
			on:keyup={() => (valid = form.checkValidity())}
			on:blur={() => (valid = form.checkValidity())}
		>
			<div class="input-row">
				<Input type={FormInputTypes.text} placeholder="first name" name="fname" />
				<Input type={FormInputTypes.text} placeholder="last name" name="lname" />
			</div>

			<div class="input-row">
				<Input type={FormInputTypes.email} placeholder="email" name="email" />
				<Input type={FormInputTypes.phone} placeholder="phone" name="phone" />
			</div>

			<div class="contact-info">
				<ContactInfo />
			</div>

			<div class="textarea">
				<Input type={FormInputTypes.textarea} placeholder="message" name="message" />
			</div>

			<div class="submit" class:valid>
				{#if loading}
					<Button type="submit">Loading...</Button>
				{:else if success}
					<p>Message Sent! Talk soon!</p>
				{:else if error}
					<p>Oops, it looks like there's a problem.<br /> Please contact me through other means.</p>
				{:else}
					<Button type="submit">Send it!</Button>
				{/if}
			</div>
		</form>
	</div>
</section>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	section {
		position: relative;
		padding: var(--s-4);
		form {
			z-index: 10;
			position: relative;
			display: grid;
			grid-template-columns: 1fr;
			justify-items: center;
			align-items: center;
			gap: var(--s-4);
			width: 100%;
			max-width: 450px;
			margin: 0 auto;
			padding: var(--s-10) 0 var(--s-10) 0;
			@include sm {
				grid-template-columns: 3fr 1fr;
				max-width: 600px;
				margin: 0 auto;
			}
			@include md {
				grid-template-columns: 3fr 2fr;
				max-width: 1100px;
				padding: var(--s-11) var(--s-7) var(--s-12) var(--s-7);
			}
			@include lg {
				gap: var(--s-7);
				padding: var(--s-11) var(--s-7) var(--s-13) var(--s-7);
			}
			.input-row {
				display: grid;
				grid-template-columns: 1fr;
				grid-column: 1/ 1;
				gap: var(--s-4);
				width: 100%;
				max-width: 540px;
				@include md {
					grid-template-columns: 1fr 1fr;
				}
				@include lg {
					gap: var(--s-6);
				}
			}
			.contact-info {
				z-index: 10;
				position: relative;
				display: none;
				grid-column: 2 / 2;
				grid-row: 1 / span 2;
				width: 100%;
				height: 100%;
				@include sm {
					display: block;
				}
				@include md {
					grid-row: 1 / span 3;
					align-self: center;
					height: fit-content;
				}
			}
			.textarea {
				grid-column: 1 / 1;
				width: 100%;
				@include sm {
					grid-column: 1 / span 2;
				}
				@include md {
					grid-column: 1 / 1;
					max-width: 540px;
				}
			}
			.submit {
				grid-column: 1 / span 2;
				width: 100%;
				max-width: 540px;
				text-align: center;
				padding-top: var(--s-5);
				opacity: 0;
				transition: all 0.5s ease;
				@include md {
					grid-column: 1 / 1;
				}
				p {
					font-weight: 700;
				}
			}
			.valid {
				opacity: 1;
				transition: all 0.5s ease;
			}
		}
	}
</style>
