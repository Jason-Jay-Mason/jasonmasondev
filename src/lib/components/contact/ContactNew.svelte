<script lang="ts">
	import type { Headline } from "$lib/types"
	import { LargeHeadline, Button } from "$lib/components"
	import Info from "./Info.svelte"
	import Input from "./Input.svelte"

	export let headline: Headline
</script>

<section id="contact">
	<LargeHeadline main={headline.main} sub={headline.sub} />

	<div class="form-area">
		<form method="POST" action="/contact">
			<div class="inputrow">
				<Input type="text" placeholder="first name" />
				<Input type="text" placeholder="last name" />
			</div>

			<div class="inputrow">
				<Input type="email" placeholder="email" />
				<Input type="phone" placeholder="phone" />
			</div>

			<div class="info">
				<Info />
			</div>

			<div class="textarea">
				<Input type="text-area" placeholder="message" />
			</div>
			<div class="submit">
				<Button type="submit">Send it!</Button>
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
				width: 100%;
				grid-column: 1 / span 2;
				text-align: center;
				padding-top: var(--s-5);
				max-width: 540px;
				@include md {
					grid-column: 1 / 1;
				}
			}
		}
	}
</style>
