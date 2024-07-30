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
		<p>+1(253) 651 8568</p>
	</div>
	<div class="item">
		<div class="icon">
			<MailIcon />
		</div>
		<p>jasonjaymason@gmail.com</p>
	</div>
	<div class="item">
		<div class="icon">
			<LocationIcon />
		</div>
		<p>Denver, CO</p>
	</div>
	<div class="item">
		<div class="icon">
			<GithubIcon />
		</div>
		<a href="https://github.com/jason-jay-mason" target="_blank" rel="noreferrer"
			>github.com/jason-jay-mason</a
		>
	</div>
	<div class="item">
		<div class="icon">
			<LinkedinIcon />
		</div>
		<a href="https://linkedin.com/in/jasonjaymason" target="_blank" rel="noreferrer"
			>linkedin.com/in/jasonjaymason</a
		>
	</div>
</div>

<style lang="scss">
	@import "../../theme/breakpoints.scss";
	.info {
		display: none;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		margin: 0 auto;
		padding: var(--s-4) var(--s-4);
		@include sm {
			display: flex;
			gap: var(--s-2);
		}
		@include md {
			padding-left: var(--s-2);
			gap: var(--s-6);
		}
		@include lg {
			gap: var(--s-7);
		}
		.item {
			display: grid;
			grid-template-columns: 1fr 10fr;
			justify-items: left;
			align-items: center;
			height: 40px;
			@include md {
				column-gap: var(--s-4);
			}
			p,
			a {
				font-size: 0.9rem;
				font-family: Open Sans;
				font-weight: 400;
				text-align: center;
				white-space: nowrap;
				line-height: 1;
				letter-spacing: 2px;
				color: var(--color-text-body);
				margin: -3px 0 0 10px;
				@include lg {
					font-size: 1.2rem;
				}
			}
			.icon {
				width: 100%;
				height: 100%;
				min-width: 35px;
				padding: 0;
				line-height: 0;
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
