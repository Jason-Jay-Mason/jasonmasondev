<script lang="ts">
	import { FormInputTypes } from "$lib/types"
	import Handlers from "./Handlers"

	export let type: FormInputTypes
	export let placeholder: string
	export let name: string
	export let required = true
</script>

{#if type === FormInputTypes.textarea}
	<textarea {placeholder} {name} {required} />
{:else if type === FormInputTypes.email}
	<input {type} {placeholder} {name} on:input={Handlers.email} {required} />
{:else if type === FormInputTypes.phone}
	<input {type} {placeholder} {name} on:keydown|preventDefault={Handlers.phone} {required} />
{:else}
	<input {type} {placeholder} {name} {required} />
{/if}

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	input,
	textarea {
		font-size: 1rem;
		color: var(--color-text-body);
		width: 100%;
		border: solid 4px var(--color-rock-100);
		background-color: var(--color-bg-field);
		&::placeholder {
			font-family: var(--font-headline);
			letter-spacing: 1.2px;
			font-weight: 600;
			text-transform: uppercase;
			color: var(--color-rock-100);
			opacity: 1;
		}
		&:placeholder-shown {
			font-size: 1rem;
		}
		&:not(placeholder-shown) {
			font-family: var(--font-body);
		}
		&:focus {
			background-color: var(--color-bg-primary);
			&::placeholder {
				opacity: 0;
			}
		}
	}

	input {
		height: 55px;
		text-align: center;
		@include lg {
			height: 60px;
		}
	}

	textarea {
		height: 250px;
		padding: var(--s-6);
		&::placeholder {
			text-align: center;
			line-height: 12rem;
		}
	}
</style>
