<script lang="ts">
	import type { Headline } from "$lib/types"
	import { FormInputTypes } from "$lib/types"
	import { LargeHeadline, Button } from "$lib/components"
	import Info from "./Info.svelte"
	import Input from "./Input.svelte"

	export let headline: Headline
	export let endPoint = "https://submit-form.com/nZtmp841"
	let form: HTMLFormElement
	let valid = false

	let loading = false
	let success = false
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
		} catch (e) {
			console.error(e)
		} finally {
			loading = false
			success = true
		}
	}
</script>

<section id="contact">
	<LargeHeadline main={headline.main} sub={headline.sub} />

	<div class="form-area">
		<form
			method="POST"
			on:submit|preventDefault={handleSubmit}
			bind:this={form}
			on:keyup={(e) => (valid = form.checkValidity())}
			on:blur={(e) => (valid = form.checkValidity())}
		>
			<div class="inputrow">
				<Input type={FormInputTypes.text} placeholder="first name" name="fname" />
				<Input type={FormInputTypes.text} placeholder="last name" name="lname" />
			</div>

			<div class="inputrow">
				<Input type={FormInputTypes.email} placeholder="email" name="email" />
				<Input type={FormInputTypes.phone} placeholder="phone" name="phone" />
			</div>

			<div class="info">
				<Info />
			</div>

			<div class="textarea">
				<Input type={FormInputTypes.textarea} placeholder="message" name="message" />
			</div>
			<div class="submit" class:valid>
				{#if loading}
					<Button type="submit">Loading...</Button>
				{:else if success}
					<p>Message Sent! Talk soon!</p>
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
		padding: var(--s-4);
		form {
			display: grid;
			justify-items: center;
			align-items: center;
			gap: var(--s-4);
			width: 100%;
			max-width: 450px;
			margin: 0 auto;
			grid-template-columns: 1fr;
			padding: var(--s-10) 0 var(--s-10) 0;
			@include sm {
				grid-template-columns: 3fr 1fr;
				max-width: 600px;
				margin: 0 auto;
			}
			@include md {
				max-width: 1100px;
				grid-template-columns: 3fr 2fr;
				padding: var(--s-11) var(--s-7) var(--s-12) var(--s-7);
			}
			@include lg {
				gap: var(--s-7);
				padding: var(--s-11) var(--s-7) var(--s-13) var(--s-7);
			}
			.inputrow {
				display: grid;
				grid-template-columns: 1fr;
				width: 100%;
				gap: var(--s-4);
				grid-column: 1/ 1;
				max-width: 540px;
				@include md {
					grid-template-columns: 1fr 1fr;
				}
				@include lg {
					gap: var(--s-6);
				}
			}
			.info {
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
					height: min-content;
				}
			}
			.textarea {
				width: 100%;
				grid-column: 1 / 1;

				@include sm {
					grid-column: 1 / span 2;
				}
				@include md {
					grid-column: 1 / 1;
					max-width: 540px;
				}
			}
			.submit {
				opacity: 0;
				width: 100%;
				grid-column: 1 / span 2;
				text-align: center;
				padding-top: var(--s-5);
				max-width: 540px;
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
