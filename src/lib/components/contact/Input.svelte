<script lang="ts">
	type InputTypes = "text" | "phone" | "email" | "text-area"
	export let type: InputTypes
	export let placeholder: string
</script>

{#if type === "text"}
	<input {type} {placeholder} />
{/if}
{#if type === "phone"}
	<input {type} {placeholder} />
{/if}
{#if type === "email"}
	<input {type} {placeholder} />
{/if}
{#if type === "text-area"}
	<textarea {placeholder} />
{/if}

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	input,
	textarea {
		width: 100%;
		border: solid 4px var(--color-rock-100);
		font-size: 1rem;
		&::placeholder {
			text-transform: uppercase;
			font: var(--font-headline);
			font-weight: 600;
			color: var(--color-rock-100);
			opacity: 1;
		}
		&:placeholder-shown {
			font-size: 0.9rem;
			background-color: var(--color-rock-900);
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
