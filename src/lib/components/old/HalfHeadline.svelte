<script lang="ts">
	export let main: string;
	export let sub: string;
</script>

<div class="headline">
	<div class="main">
		<h3>{main}</h3>
	</div>

	<div class="sub">
		<div class="mask">
			<img src="/pencil-bg.svg" />
		</div>
		<h4>{sub}</h4>
	</div>
</div>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	.headline {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		.sub {
			position: relative;
			width: 100%;
			.mask {
				position: absolute;
				width: 100%;
				height: 100%;
				overflow: hidden;
				img {
					position: absolute;
					top: 0;
					bottom: 0;
					width: 600px;
					height: 50%;
					margin: auto 0;
					object-fit: cover;
					opacity: var(--opacity-pencilbg);
				}
			}
			h3,
			h4 {
				white-space: nowrap;
			}
			h4 {
				width: fit-content;

				float: right;
				padding-right: var(--s-3);
				font-size: calc(var(--text-md) + 5px);
				color: var(--color-rock-200);
				font-family: var(--font-subheadline);
				transform: rotate(-4deg);
				text-align: right;
				@include md {
					font-size: calc(var(--text-md) + 10px);
				}
				@include lg {
					font-size: calc(var(--text-lg) + 5px);
				}
				@include xl {
					font-size: calc(var(--text-lg) + 12px);
				}
			}
		}
		h3 {
			white-space: nowrap;
			line-height: 100%;
			padding-right: var(--s-4);
			font-size: var(--text-md);
			letter-spacing: 0.105em;
			color: var(--color-rock-100);
			font-family: var(--font-headline);
			@include lg {
				font-size: calc(var(--text-md) + 7px);
			}
			@include xl {
				font-size: calc(var(--text-lg));
			}
		}
	}
</style>
