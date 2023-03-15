<script lang="ts">
	type Fieldtype = 'text-area' | 'email' | 'phone' | 'text';
	export let placeholder: string;
	export let type: Fieldtype;
	export let value: string;
	export let valid: boolean;

	export let required: boolean = true;
	let invalidExpMessage: string;

	//Regex validtion by field type. This is a setup function
	function getValidationExpression() {
		switch (type) {
			case 'email':
				invalidExpMessage = 'Please enter a valid email.';
				return new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
			case 'phone':
				invalidExpMessage = 'Please enter a valid phone number';
				return new RegExp(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);
			default:
				return null;
		}
	}
	//Set of the validtion regex and invalid message for this input
	export let validationExpression = getValidationExpression();

	let keypress: any = null;

	function handleValidity(e: any) {
		if (validationExpression && validationExpression.test) {
			const testPasssed = validationExpression.test(e.target.value);
			if (!testPasssed) {
				valid = false;
				e.target.setCustomValidity(invalidExpMessage);
			} else {
				valid = true;
				e.target.setCustomValidity('');
			}
		} else {
			valid = true;
			e.target.setCustomValidity('');
		}
	}

	//#region form handlers
	function handlePhoneInput(e: any) {
		if (keypress.code[0] === 'K' || (e.target.value.length > 14 && keypress.key !== 'Backspace')) {
			e.target.value = e.target.value.slice(0, e.target.value.length - 1);
			return;
		}

		let next;
		let v = e.target.value;

		if (keypress.key !== 'Backspace') {
			switch (v.length) {
				case 1:
					next = '(' + v;
					break;
				case 4:
					next = v + ') ';
					break;
				case 9:
					next = v + '-';
					break;
				default:
					next = v;
			}
			e.target.value = next;
			value = next;
		} else {
			switch (v.length) {
				case 1:
					next = '';
					break;
				case 5:
					next = v.slice(0, 3);
					break;
				case 9:
					next = v.slice(0, 8);
					break;
				default:
					next = v;
			}
			e.target.value = next;
			value = next;
		}

		//If there is regex validtion for the phone then we test it
		handleValidity(e);
	}

	function handleInput(e: any) {
		handleValidity(e);
	}

	function handleChange(e: any) {
		if (required === true) {
			if (e.target.value === '' || e.target.value === ' ') {
				valid = false;
				let error = 'This field is required.';
				e.target.setCustomValidity(error);
			}
		}
	}
	// #endregion;
</script>

{#if type === 'text' || type === null || type === 'email'}
	<label class="label">
		<input
			bind:value
			type="text"
			on:input={handleInput}
			on:blur={handleChange}
			minlength="2"
			{placeholder}
			class="input"
			required
		/>
	</label>
{:else if type === 'phone'}
	<label class="label">
		<input
			{value}
			type="text"
			on:keydown={(e) => {
				keypress = e;
			}}
			on:input={handlePhoneInput}
			on:blur={handleChange}
			minlength="2"
			{placeholder}
			class="input"
			required
		/>
	</label>
{:else if type === 'text-area'}
	<label class="label">
		<textarea
			bind:value
			minlength="2"
			on:input={handleInput}
			on:blur={handleChange}
			{placeholder}
			class="text-area"
			required
		/>
	</label>
{/if}

<style lang="scss">
	label {
		input,
		textarea {
			margin: var(--s-3) 0;
			background-color: var(--color-bg-primary);
			box-shadow: none;
			color: var(--color-rock-100);
			border: 2px solid var(--color-rock-100);
			font-family: var(--font-subheadline);
			font-size: var(--text-lg);
			text-align: center;
			background-image: url('/pencil-bg.svg');
			&::placeholder {
				color: var(--color-rock-100);
				opacity: 1;
				font-weight: 700;
				font-family: var(--font-headline);
				letter-spacing: 0.105em;
				text-transform: uppercase;
				font-size: 1rem;
			}
			&:focus {
				border: 2px solid var(--color-rock-100);
				background-image: url('/pencil-bg.svg');
				&::placeholder {
					opacity: 0;
				}
			}
			&:not(:focus):placeholder-shown {
				background-image: none;
				overflow: hidden;
			}
		}
		input {
			width: 100%;
			padding: var(--s-3) var(--s-5);
			background-size: 800px auto;
		}
		textarea {
			width: 100%;
			height: var(--s-14);
			background-size: cover;
			padding: var(--s-5) var(--s-5);
			margin-bottom: var(--s-9);
			&::placeholder {
				line-height: 11rem;
			}
		}
	}
</style>
