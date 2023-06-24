<script lang="ts">
	import { AnimatedGridLink } from "$lib/components"
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	const { headline, hook, href } = link
</script>

<a {href}>
	<AnimatedGridLink {headline} {hook}>
		<svg
			width="348"
			height="174"
			viewBox="0 0 348 174"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="serverside">
				<g id="static">
					<path
						id="server-top"
						d="M214 66H343V40C343 37.7909 341.209 36 339 36H218C215.791 36 214 37.7909 214 40V66Z"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<rect
						id="server-middle"
						x="1"
						y="-1"
						width="129"
						height="29"
						transform="matrix(1 0 0 -1 213 102)"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<path
						id="server-bottom"
						d="M218 138H339C341.209 138 343 136.209 343 134V109H214V134C214 136.209 215.791 138 218 138Z"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<rect
						id="laptop-top"
						x="1"
						y="-1"
						width="138"
						height="92"
						transform="matrix(1 0 0 -1 11 127)"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<rect
						id="laptop-screen"
						x="0.5"
						y="-0.5"
						width="126"
						height="75"
						transform="matrix(1 0 0 -1 17 118)"
						fill="white"
						stroke="#3D3834"
					/>
					<path
						id="laptop-bottom"
						d="M7 138H155C157.209 138 159 136.209 159 134V125H3V134C3 136.209 4.79086 138 7 138Z"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<path
						id="laptop-notch"
						d="M71 130.5H89C91.4853 130.5 93.5 128.485 93.5 126V124.5H66.5V126C66.5 128.485 68.5147 130.5 71 130.5Z"
						fill="white"
						stroke="#3D3834"
					/>
					<path id="track2" d="M80 145V168H278V145" stroke="#828282" stroke-width="1.2" />
					<path id="track1" d="M80 31V6H278V31" stroke="#828282" stroke-width="1.2" />
					<rect
						id="navbar"
						width="125"
						height="6"
						transform="matrix(1 0 0 -1 18 50)"
						fill="#E6E6E6"
					/>
				</g>
				<g id="lights">
					<rect
						id="light-1"
						width="25"
						height="6"
						transform="matrix(1 0 0 -1 223 50)"
						fill="#C0C0C0"
					/>
					<rect
						id="light-2"
						width="11"
						height="5"
						transform="matrix(1 0 0 -1 223 58)"
						fill="#D1D1D1"
					/>
					<rect
						id="light-3"
						width="12"
						height="5"
						transform="matrix(1 0 0 -1 236 58)"
						fill="#E7E7E7"
					/>
				</g>
				<g id="processor">
					<circle
						id="p-1"
						cx="306"
						cy="52"
						r="3.65"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<circle
						id="p-2"
						cx="317"
						cy="52"
						r="3.65"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<circle
						id="p-3"
						cx="327"
						cy="52"
						r="3.65"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<circle
						id="p-4"
						cx="233"
						cy="88"
						r="3.65"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<circle
						id="p-5"
						cx="326"
						cy="88"
						r="3.65"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<path
						id="p-6"
						d="M282.65 88C282.65 90.5375 280.376 92.65 277.5 92.65C274.624 92.65 272.35 90.5375 272.35 88C272.35 85.4625 274.624 83.35 277.5 83.35C280.376 83.35 282.65 85.4625 282.65 88Z"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<circle
						id="p-7"
						cx="232"
						cy="124"
						r="3.65"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<circle
						id="p-8"
						cx="325"
						cy="124"
						r="3.65"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
					<circle
						id="p-9"
						cx="277.5"
						cy="123.5"
						r="5.15"
						fill="white"
						stroke="#828282"
						stroke-width="0.7"
					/>
				</g>
				<g id="page">
					<g id="Frame 57">
						<rect
							id="sec-1"
							width="69"
							height="6"
							transform="matrix(1 0 0 -1 25 62)"
							fill="#D1D1D1"
						/>
						<rect
							id="sec-2"
							width="53"
							height="6"
							transform="matrix(1 0 0 -1 25 73)"
							fill="#D6D6D6"
						/>
						<rect
							id="sec-3"
							width="69"
							height="6"
							transform="matrix(1 0 0 -1 25 84)"
							fill="#DCDCDC"
						/>
						<rect
							id="sec-4"
							width="69"
							height="6"
							transform="matrix(1 0 0 -1 25 95)"
							fill="#F2F2F2"
						/>
					</g>
				</g>
				<path id="data-2" d="M80 145V168H278V145" stroke="#828282" stroke-width="5" />
				<path
					id="data-1"
					d="M80 31V7C80 6.44772 80.4477 6 81 6H277C277.552 6 278 6.44772 278 7V31"
					stroke="#828282"
					stroke-width="5"
				/>
				<g id="spinner">
					<path
						id="edge-1"
						d="M86.5104 74.4896C85.7211 73.7003 84.7841 73.0742 83.7528 72.647C82.7215 72.2199 81.6162 72 80.5 72C79.3838 72 78.2785 72.2199 77.2472 72.647C76.2159 73.0742 75.2789 73.7003 74.4896 74.4896L80.5 80.5L86.5104 74.4896Z"
						fill="#D1D1D1"
					/>
					<path
						id="edge-2"
						d="M74.4896 86.5104C75.2789 87.2997 76.2159 87.9258 77.2472 88.353C78.2785 88.7801 79.3838 89 80.5 89C81.6162 89 82.7215 88.7801 83.7528 88.353C84.7841 87.9258 85.7211 87.2997 86.5104 86.5104L80.5 80.5L74.4896 86.5104Z"
						fill="#D1D1D1"
					/>
					<circle id="center" cx="80.5" cy="80.5005" r="7.12162" fill="white" />
				</g>
			</g>
		</svg>
	</AnimatedGridLink>
</a>

<style lang="scss">
	@import "../theme/breakpoints.scss";
	$length: 6s;
	//page
	@for $i from 1 to 5 {
		$start: (4 * $i) * 1%;
		@keyframes sec-#{$i} {
			0% {
				opacity: 1;
			}
			3% {
				opacity: 0;
			}
			4%,
			#{62% + $start} {
				opacity: 0;
			}
			#{66% + $start},
			#{70% + $start} {
				opacity: 1;
			}

			#{71% + $start},
			100% {
				opacity: 1;
			}
		}

		#sec-#{$i} {
			fill: var(--color-rock-#{$i + 4}00);
		}

		a:hover svg {
			#sec-#{$i} {
				animation: sec-#{$i} $length linear infinite;
			}
		}
	}

	#data-2 {
		opacity: 0;
		stroke-dasharray: 0 1000 1 1000;
		stroke-dashoffset: 760;
		stroke-linecap: round;
		stroke: var(--color-rock-300);
		filter: drop-shadow(-2px 0px 2px var(--color-rock-300));
	}
	@keyframes data-2 {
		0%,
		52% {
			opacity: 0;
			stroke-dashoffset: 760;
		}
		53%,
		57% {
			opacity: 1;
			stroke-width: 7;
		}
		60% {
			stroke-width: 2;
		}
		60% {
			opacity: 1;
			stroke-dashoffset: 1000;
		}
		61%,
		100% {
			opacity: 0;
			stroke-dashoffset: 1000;
		}
	}

	//processor
	@for $i from 1 to 10 {
		$start: (4 * $i) * 1%;
		@keyframes processor-#{$i} {
			#{10% + $start} {
				fill: var(--color-bg-primary);
			}
			#{11% + $start},
			#{12% + $start} {
				fill: var(--color-rock-300);
			}
			#{13% + $start},
			100% {
				fill: var(--color-bg-primary);
			}
		}
		#p-#{$i} {
			fill: var(--color-bg-primary);
			stroke: var(--color-rock-300);
		}
		a:hover svg {
			#p-#{$i} {
				animation: processor-#{$i} $length linear infinite;
			}
		}
	}
	//lights normal
	$normal-light-steps: 5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95%;
	@for $i from 1 to 4 {
		@keyframes light-#{$i} {
			0%,
			50% {
				opacity: 1;
			}
			@each $percent in $normal-light-steps {
				$next: $percent + ($i - 1 * 1%);
				#{$next},
				#{$next + 4% } {
					opacity: 1;
				}
				#{$next + 4% },
				#{$next + 5% } {
					opacity: 0.7;
				}
			}
			95%,
			100% {
				opacity: 1;
			}
		}
		#light-#{$i} {
			fill: var(--color-rock-#{$i + 3}00);
			animation: light-#{$i} $length linear infinite;
		}
	}

	//lights hover
	$light-steps: 5%, 15%, 25%, 35%, 45%;
	@for $i from 1 to 4 {
		@keyframes light-#{$i} {
			0%,
			5% {
				opacity: 1;
			}
			@each $percent in $light-steps {
				$next: $percent + ($i - 1 * 1%);
				#{$next},
				#{$next + 4% } {
					opacity: 1;
				}
				#{$next + 4% },
				#{$next + 5% } {
					opacity: 0.7;
				}
			}
			55%,
			100% {
				opacity: 1;
			}
		}
		#light-#{$i} {
			fill: var(--color-rock-#{$i + 3}00);
		}
		a:hover svg {
			#light-#{$i} {
				animation: light-#{$i} $length linear infinite;
			}
		}
	}

	#data-1 {
		opacity: 0;
		stroke-dasharray: 0 1000 1 1000;
		stroke-dashoffset: 1000;
		stroke-linecap: round;
		stroke: var(--color-rock-300);
		filter: drop-shadow(-2px 0px 2px var(--color-rock-300));
	}
	@keyframes data-1 {
		2% {
			opacity: 0.6;
		}
		3%,
		7% {
			stroke-width: 7;
		}
		10% {
			opacity: 0.6;
			stroke-width: 2;
		}
		40% {
			stroke-dashoffset: 0;
		}
		30%,
		100% {
			stroke: none;
		}
	}

	#spinner {
		opacity: 0;
		transform-origin: center;
		transform-box: fill-box;
		#center {
			fill: var(--color-bg-primary);
		}
		#edge-1,
		#edge-2 {
			fill: var(--color-rock-300);
		}
	}

	@keyframes spinner {
		0% {
			opacity: 0;
		}
		5% {
			opacity: 1;
			transform: rotate(0);
		}
		60% {
			opacity: 1;
			transform: rotate(1080deg);
		}
		60% {
			opacity: 1;
		}
		65%,
		100% {
			opacity: 0;
		}
	}

	a:hover svg {
		#data-2 {
			animation: data-2 $length linear infinite;
		}
		#data-1 {
			animation: data-1 $length linear infinite;
		}
		#spinner {
			animation: spinner $length linear infinite;
		}
	}
	#static {
		#laptop-notch,
		#laptop-top,
		#laptop-bottom,
		#laptop-screen,
		#server-top,
		#server-middle,
		#server-bottom {
			fill: var(--color-bg-primary);
			stroke: var(--color-rock-200);
		}
		#track1,
		#track2 {
			stroke: var(--color-rock-400);
		}
		#navbar {
			fill: var(--color-rock-600);
		}
	}

	svg {
		display: inline-block;
		height: 100%;
		width: 100%;
		padding: 0 var(--s-7);
		@include xs {
			padding: 0 var(--s-8);
		}
	}
</style>
