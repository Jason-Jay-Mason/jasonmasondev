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
		width: 100%;
		border: solid 4px var(--color-rock-100);
		font-size: 1rem;
		background-color: var(--color-rock-900);
		color: var(--color-text-body);
		&::placeholder {
			text-transform: uppercase;
			font: var(--font-headline);
			font-weight: 600;
			color: var(--color-rock-100);
			opacity: 1;
		}
		&:placeholder-shown {
			font-size: 0.9rem;
		}
		&:focus {
			background-color: var(--color-bg-primary);
			&::placeholder {
				opacity: 0;
			}
		}
	}

	input {
		height: 50px;
		text-align: center;
		@include lg {
			height: 60px;
		}
	}

	textarea {
		height: 250px;
		padding: var(--s-4);
		&::placeholder {
			text-align: center;
			line-height: 14rem;
		}
	}
</style>
