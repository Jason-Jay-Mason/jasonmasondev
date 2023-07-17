<script lang="ts">
	import PhoneIcon from "./PhoneIcon.svelte"
	import MailIcon from "./MailIcon.svelte"
	import LocationIcon from "./LocationIcon.svelte"
	import GithubIcon from "./GithubIcon.svelte"
	import LinkedinIcon from "./LinkedinIcon.svelte"
</script>

<div class="info">
	<div class="item">
		<div class="icon">
			<PhoneIcon />
		</div>
		<span>+1(253) 651 8568</span>
	</div>
	<div class="item">
		<div class="icon">
			<MailIcon />
		</div>
		<span>jasonjaymason@gmail.com</span>
	</div>
	<div class="item">
		<div class="icon">
			<LocationIcon />
		</div>
		<span>Denver, CO</span>
	</div>
	<div class="item">
		<div class="icon">
			<GithubIcon />
		</div>
		<span>github.com/jasonjaymason</span>
	</div>
	<div class="item">
		<div class="icon">
			<LinkedinIcon />
		</div>

		<span>github.com/jasonjaymason</span>
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.info {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		width: min-content;
		height: 100%;
		margin: 0 auto;
		padding: var(--s-4) var(--s-4);
		@include sm {
			display: flex;
		}
		@include md {
			padding-left: var(--s-2);
		}
		.item {
			display: grid;
			grid-template-columns: 1fr 10fr;
			justify-items: left;
			align-items: center;
			@include md {
				padding: var(--s-4);
				column-gap: var(--s-4);
			}
			span {
				line-height: 1;
				margin-top: -3px;
				color: var(--color-text-body);
				font-family: Open Sans;
				font-size: 1rem;
				text-align: center;
				letter-spacing: 2px;
				margin-left: 10px;
				@include lg {
					font-size: 1.3rem;
				}
			}
			.icon {
				padding: 0;
				line-height: 0;
				min-width: 25px;
				@include md {
					width: 35px;
				}
				@include lg {
					width: 43px;
				}
			}
		}
	}
</style>
