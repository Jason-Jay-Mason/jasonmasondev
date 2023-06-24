<script lang="ts">
	import { AnimatedGridLink } from "$lib/components"
	import type { GridLinkData } from "$lib/types"

	export let link: GridLinkData
	const { headline, hook, href } = link
</script>

<a {href}>
	<AnimatedGridLink {headline} {hook}>
		<svg
			width="287"
			height="222"
			viewBox="0 0 287 222"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="martech-animation">
				<g id="person">
					<path
						id="person-top"
						d="M158.962 91.1058C158.962 99.1889 152.224 105.787 143.857 105.787C135.49 105.787 128.752 99.1889 128.752 91.1058C128.752 83.0227 135.49 76.4248 143.857 76.4248C152.224 76.4248 158.962 83.0227 158.962 91.1058Z"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<path
						id="person-bottom"
						d="M142.667 110.33H144.2C154.693 110.33 163.2 118.837 163.2 129.33V143.082H123.667V129.33C123.667 118.837 132.173 110.33 142.667 110.33Z"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
				</g>
				<g id="mail">
					<rect
						id="mail-background"
						x="14.5356"
						y="56.4004"
						width="46.6321"
						height="30.4214"
						fill="#D8D8D8"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<path
						id="mail-bottom"
						d="M14.3888 86.3613H61.5012L37.945 65.9821L14.3888 86.3613Z"
						fill="#F9F9F9"
						stroke="#3D3834"
						stroke-linejoin="round"
					/>
					<path
						id="mail-top"
						d="M14.2956 56.2783H61.408L37.8518 76.6575L14.2956 56.2783Z"
						fill="white"
						stroke="#3D3834"
						stroke-linejoin="round"
					/>
				</g>
				<g id="notifications">
					<path
						id="bell-top"
						d="M238.602 49.8287V51.4789H233.582V49.8287C233.582 48.4423 234.705 47.3184 236.092 47.3184C237.478 47.3184 238.602 48.4423 238.602 49.8287Z"
						fill="#D1D1D1"
						stroke="#3D3834"
					/>
					<path
						id="bell-bottom"
						d="M241.16 85.1621C240.908 87.9767 238.542 90.1827 235.662 90.1827C232.782 90.1827 230.416 87.9767 230.164 85.1621H241.16Z"
						fill="#E9E9E9"
						stroke="#3D3834"
					/>
					<path
						id="bell-middle"
						d="M249.567 73.3448V64.5938C249.567 57.1519 243.534 51.1191 236.092 51.1191C228.65 51.1191 222.617 57.152 222.617 64.5938V73.3448H221.6C219.391 73.3448 217.6 75.1357 217.6 77.3448V78.492C217.6 80.6796 219.357 82.4614 221.545 82.4916L250.098 82.8862C252.329 82.917 254.154 81.1173 254.154 78.8866V77.3448C254.154 75.1357 252.363 73.3448 250.154 73.3448H249.567Z"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<path
						id="glare"
						d="M226.435 65.3107C226.419 61.7533 229.875 57.1399 234.176 55.4197"
						stroke="#3D3834"
					/>
				</g>
				<g id="Group 84">
					<g id="metrics">
						<rect
							id="bar-1"
							x="115.614"
							y="35.459"
							width="9.51764"
							height="11.6118"
							fill="white"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<rect
							id="bar-2"
							x="130.273"
							y="24.9893"
							width="8.47058"
							height="22.0823"
							fill="#F9F9F9"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<rect
							id="bar-3"
							x="143.885"
							y="29.1768"
							width="9.51764"
							height="17.8941"
							fill="#F2F2F2"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<rect
							id="bar-4"
							x="158.544"
							y="13.4707"
							width="8.47058"
							height="33.6"
							fill="#E4E4E4"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<path
							id="metric-linegraph"
							d="M120.373 27.6534L133.985 17.1829L148.644 21.3711L162.255 4.61816"
							stroke="#3D3834"
						/>
						<circle
							id="point-4"
							cx="162.256"
							cy="4.61765"
							r="2.11765"
							fill="white"
							stroke="#3D3834"
						/>
						<circle
							id="point-3"
							cx="148.644"
							cy="21.3706"
							r="2.11765"
							fill="white"
							stroke="#3D3834"
						/>
						<circle
							id="point-2"
							cx="133.985"
							cy="17.1821"
							r="2.11765"
							fill="white"
							stroke="#3D3834"
						/>
						<circle
							id="point-1"
							cx="120.373"
							cy="27.6528"
							r="2.11765"
							fill="white"
							stroke="#3D3834"
						/>
					</g>
				</g>
				<g id="chatbox-icon">
					<path
						id="chatbox"
						d="M242.074 162.813L230.004 171.669V163.619V162.619H229.004H222.414V132.686H270V162.619H242.665H242.338L242.074 162.813Z"
						fill="white"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<g id="chatlines">
						<rect
							id="chatline-1"
							width="34.3286"
							height="3"
							transform="matrix(1 0 0 -1 227.136 140.268)"
							fill="#D1D1D1"
						/>
						<rect
							id="chatline-2"
							width="25.7464"
							height="3"
							transform="matrix(1 0 0 -1 227.136 145.268)"
							fill="#D6D6D6"
						/>
						<rect
							id="chatline-3"
							width="34.3286"
							height="3"
							transform="matrix(1 0 0 -1 227.136 150.268)"
							fill="#DCDCDC"
						/>
						<rect
							id="chatline-4"
							width="34.3286"
							height="3"
							transform="matrix(1 0 0 -1 227.136 155.268)"
							fill="#F2F2F2"
						/>
					</g>
				</g>
				<g id="automations">
					<circle
						id="gearcontainer"
						cx="36.4215"
						cy="129.779"
						r="12.35"
						fill="#BEBEBE"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<circle
						id="automation-1"
						cx="10.675"
						cy="166.968"
						r="6.175"
						fill="#F7F7F7"
						stroke="#3D3834"
					/>
					<circle
						id="automation-2"
						cx="36.4213"
						cy="166.968"
						r="6.175"
						fill="#ECECEC"
						stroke="#3D3834"
					/>
					<circle
						id="automation-3"
						cx="62.1679"
						cy="166.968"
						r="6.175"
						fill="#DADADA"
						stroke="#3D3834"
					/>
					<g id="automationsgear">
						<path
							id="gearbackground"
							d="M34.5143 121.196H38.3286V123.38C38.761 123.509 39.1751 123.68 39.5659 123.889L41.3048 122.15L44.002 124.847L42.2772 126.572C42.5015 126.981 42.6843 127.416 42.8198 127.871H45.0035V131.685H42.82C42.6878 132.13 42.5107 132.554 42.2938 132.954L44.002 134.663L41.3049 137.36L39.5966 135.651C39.1968 135.868 38.7723 136.045 38.3286 136.177V138.361H34.5143V136.177C34.0589 136.042 33.6238 135.859 33.2149 135.634L31.4899 137.359L28.7928 134.662L30.5319 132.923C30.3228 132.532 30.1514 132.118 30.0227 131.685H27.8391L27.8391 127.871H30.0228C30.1549 127.427 30.3319 127.003 30.5486 126.603L28.7926 124.847L31.4897 122.15L33.2456 123.906C33.6456 123.689 34.0703 123.512 34.5143 123.38V121.196Z"
							fill="white"
						/>
						<circle id="gearcenter" cx="36.4215" cy="129.779" r="3.81429" fill="#BEBEBE" />
					</g>
					<path
						id="automationsbranch"
						d="M36.4215 145.036V150.408M36.4215 150.408H10.675V157.433M36.4215 150.408H62.1679V157.433M36.4215 150.408V157.019"
						stroke="#3D3834"
					/>
				</g>
				<g id="videoads">
					<rect
						id="videobox"
						x="117.888"
						y="174.643"
						width="51.9868"
						height="33.2088"
						fill="#FAFAFA"
						stroke="#3D3834"
						stroke-width="2"
					/>
					<g id="videotarget">
						<path
							id="videotargetcircle"
							d="M129.714 178.227C129.714 183.017 125.984 186.835 121.462 186.835C116.94 186.835 113.21 183.017 113.21 178.227C113.21 173.437 116.94 169.619 121.462 169.619C125.984 169.619 129.714 173.437 129.714 178.227Z"
							fill="white"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<path
							id="videotargetline-4"
							d="M117.192 178.583H107.939"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<path
							id="videotargetline-3"
							d="M134.273 178.583H125.021"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<path
							id="videotargetline-2"
							d="M121.462 165.06L121.462 174.312"
							stroke="#3D3834"
							stroke-width="2"
						/>
						<path
							id="videotargetline-1"
							d="M121.462 182.141L121.462 191.394"
							stroke="#3D3834"
							stroke-width="2"
						/>
					</g>
					<path
						id="videoplayicon"
						d="M152.097 191.639L139.187 199.092L139.187 184.185L152.097 191.639Z"
						fill="#BEBEBE"
					/>
				</g>
				<g id="martechlines">
					<path id="mailline" d="M73 81L109 92" stroke="#828282" stroke-width="1.2" />
					<path id="notificationline" d="M209 81L173 92" stroke="#828282" stroke-width="1.2" />
					<path id="chatboxline" d="M209 146L173 136" stroke="#828282" stroke-width="1.2" />
					<path id="videoadsline" d="M144 168L144 152" stroke="#828282" stroke-width="1.2" />
					<path id="metricsline" d="M144 70L144 54" stroke="#828282" stroke-width="1.2" />
					<path id="automationsline" d="M76 146L113 136" stroke="#828282" stroke-width="1.2" />
				</g>
				<g id="martechdata">
					<path id="martechdata-5" d="M76 146L113 136" stroke="#828282" stroke-width="4" />
					<path id="martechdata-4" d="M144 168L144 152" stroke="#828282" stroke-width="4" />
					<path
						id="martechdata-3"
						d="M209 146L173 136"
						stroke="#828282"
						stroke-width="4"
						stroke-linejoin="bevel"
					/>
					<path
						id="martechdata-2"
						d="M209 81L173 92"
						stroke="#828282"
						stroke-width="4"
						stroke-linejoin="round"
					/>
					<path
						id="martechdata-0"
						d="M144 70L144 54"
						stroke="#828282"
						stroke-width="4"
						stroke-linejoin="round"
					/>
					<path
						id="martechdata-1"
						d="M73 81L109 92"
						stroke="#828282"
						stroke-width="5"
						stroke-linejoin="round"
					/>
				</g>
			</g>
		</svg>
	</AnimatedGridLink>
</a>

<style lang="scss">
	@for $i from 1 to 5 {
		@keyframes bar-#{$i} {
			0% {
			}
			@for $j from 1 to 9 {
				#{$j * 10%} {
					transform: scale3d(1, ((random(3) + 6) * 0.1), 1);
				}
			}
			100% {
			}
		}
		#bar-#{$i} {
			transform-origin: bottom;
			transform-box: fill-box;
		}
		a:hover svg {
			#bar-#{$i} {
				animation: bar-#{$i} 5s linear infinite;
			}
		}
	}
	@for $i from 1 to 4 {
		$start: $i * 1%;
		@keyframes automation-#{$i} {
			0%,
			#{5% + $start} {
				fill: var(--color-rock-#{$i + 4}00);
			}
			#{7% + $start} {
				fill: var(--color-rock-#{$i + 1}00);
			}
			#{8% + $start},
			#{78% + $start} {
				fill: var(--color-rock-#{$i + 4}00);
			}
			#{80% + $start} {
				fill: var(--color-rock-#{$i + 1}00);
			}
			#{82% + $start},
			100% {
				fill: var(--color-rock-#{$i + 4}00);
			}
		}

		a:hover svg {
			#automation-#{$i} {
				animation: automation-#{$i} 5s linear infinite;
			}
		}
	}
	@for $i from 1 to 5 {
		$start: $i * 1%;
		@keyframes chatline-#{$i} {
			#{10% + $start} {
				opacity: 0;
			}
			#{14% + $start},
			#{50% + $start} {
				opacity: 1;
			}
			#{60% + $start} {
				opacity: 0;
			}
			#{62% + $start} {
				opacity: 0;
			}
			#{64% + $start} {
				opacity: 1;
			}
		}
		a:hover svg {
			#chatline-#{$i} {
				animation: chatline-#{$i} 5s linear infinite;
			}
		}
	}

	@keyframes videotarget {
		23% {
			transform: rotate(0);
		}
		26% {
			transform: rotate(180deg);
		}
		75% {
			transform: rotate(180deg);
		}
		78%,
		100% {
			transform: rotate(0deg);
		}
	}

	#videotarget {
		transform-origin: center;
		transform-box: fill-box;
	}
	a:hover svg {
		#videotarget {
			animation: videotarget 5s linear infinite;
		}
	}
	@keyframes notifications {
		10% {
			transform: rotate(0);
		}
		11% {
			transform: rotate(5deg);
		}
		14% {
			transform: rotate(-5deg);
		}
		16% {
			transform: rotate(5deg);
		}
		17% {
			transform: rotate(0);
		}
		70% {
			transform: rotate(0);
		}
		71% {
			transform: rotate(5deg);
		}
		74% {
			transform: rotate(-5deg);
		}
		76% {
			transform: rotate(5deg);
		}
		77% {
			transform: rotate(0);
		}
	}
	#notifications {
		transform-origin: center;
		transform-box: fill-box;
	}
	a:hover svg {
		#notifications {
			animation: notifications 5s linear infinite;
		}
	}

	@keyframes mail {
		5% {
			transform: rotate(0);
		}
		6% {
			transform: rotate(5deg);
		}
		9% {
			transform: rotate(-5deg);
		}
		11% {
			transform: rotate(5deg);
		}
		12% {
			transform: rotate(0);
		}
		55% {
			transform: rotate(0);
		}
		56% {
			transform: rotate(5deg);
		}
		57% {
			transform: rotate(-5deg);
		}
		59% {
			transform: rotate(5deg);
		}
		60% {
			transform: rotate(0);
		}
	}
	#mail {
		transform-origin: center;
		transform-box: fill-box;
	}
	a:hover svg {
		#mail {
			animation: mail 5s linear infinite;
		}
	}
	@keyframes martechdata-0 {
		@for $i from 0 to 4 {
			$next: $i * 25%;
			#{0% + $next},
			#{5% + $next} {
				opacity: 0;
			}
			#{11% + $next} {
				stroke-width: 5;
				opacity: 0.7;
			}
			#{20% + $next} {
				stroke-width: 5;
				opacity: 0.7;
			}
			#{24% + $next} {
				stroke-width: 1;
				opacity: 0;
				stroke-dashoffset: 985;
			}
			#{25% + $next} {
				opacity: 0;
				stroke-dashoffset: 1000;
			}
		}
	}
	$dif5: 3%;
	@keyframes martechdata-5 {
		#{$dif5},
		#{8% + $dif5} {
			opacity: 0;
		}
		#{9% + $dif5} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{18% + $dif5} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{21% + $dif5} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}
		#{24% + $dif5} {
			stroke-dashoffset: 1000;
		}
		#{71%},
		#{76%} {
			stroke-dashoffset: 1000;
			opacity: 0;
		}

		#{81% } {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{86% } {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{91%} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}

		#{92% } {
			stroke-dashoffset: 1000;
		}
	}
	$dif4: 20%;
	@keyframes martechdata-4 {
		#{$dif4},
		#{5% + $dif4} {
			stroke-dashoffset: 1000;
			opacity: 0;
		}
		#{6% + $dif4} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{15% + $dif4} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{20% + $dif4} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 985;
		}
		#{21% + $dif4} {
			stroke-dashoffset: 1000;
		}
		#{50% + $dif4},
		#{55% + $dif4} {
			stroke-dashoffset: 1000;
			opacity: 0;
		}

		#{60% + $dif4} {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{65% + $dif4} {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{70% + $dif4} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 985;
		}

		#{71% + $dif4} {
			stroke-dashoffset: 1000;
		}
	}
	$dif3: 9%;
	@keyframes martechdata-3 {
		#{$dif3},
		#{5% + $dif3} {
			opacity: 0;
		}
		#{6% + $dif3} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{15% + $dif3} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{20% + $dif3} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}
		#{21% + $dif3} {
			stroke-dashoffset: 1000;
		}
		#{50% + $dif3},
		#{55% + $dif3} {
			stroke-dashoffset: 1000;
			opacity: 0;
		}

		#{60% + $dif3} {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{65% + $dif3} {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{70% + $dif3} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}

		#{71% + $dif3} {
			stroke-dashoffset: 1000;
		}
	}
	$dif2: 6%;
	@keyframes martechdata-2 {
		#{$dif3},
		#{5% + $dif2} {
			opacity: 0;
		}
		#{6% + $dif2} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{15% + $dif2} {
			stroke-width: 5;
			opacity: 0.7;
		}
		#{20% + $dif2} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}
		#{21% + $dif2} {
			stroke-dashoffset: 1000;
		}
		#{60% + $dif2},
		#{65% + $dif2} {
			stroke-dashoffset: 1000;
			opacity: 0;
		}

		#{70% + $dif2} {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{75% + $dif2} {
			stroke-width: 5;
			opacity: 0.7;
		}

		#{80% + $dif2} {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}

		#{81% + $dif2} {
			stroke-dashoffset: 1000;
		}
	}
	@keyframes martechdata-1 {
		0%,
		5% {
			opacity: 0;
		}
		6% {
			stroke-width: 5;
			opacity: 0.7;
		}
		15% {
			stroke-width: 5;
			opacity: 0.7;
		}
		20% {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}
		21% {
			stroke-dashoffset: 1000;
		}
		50%,
		55% {
			stroke-dashoffset: 1000;
			opacity: 0;
		}
		60% {
			stroke-width: 5;
			opacity: 0.7;
		}
		65% {
			stroke-width: 5;
			opacity: 0.7;
		}
		70% {
			stroke-width: 1;
			opacity: 0;
			stroke-dashoffset: 960;
		}
		71% {
			stroke-dashoffset: 1000;
		}
	}

	@for $i from 0 to 6 {
		#martechdata-#{$i} {
			opacity: 0;
			stroke-dasharray: 0 1000 1 1000;
			stroke-dashoffset: 1000;
			stroke-linecap: round;
			stroke: var(--color-rock-300);
			@if $i == 2 or $i == 3 {
				filter: drop-shadow(2px 0px 2px var(--color-rock-300));
			}
			@if $i == 1 or $i == 5 {
				filter: drop-shadow(-2px 0px 2px var(--color-rock-300));
			}
			@if $i == 0 or $i == 4 {
				filter: drop-shadow(0px 2px 2px var(--color-rock-300));
			}
		}

		a:hover svg {
			#martechdata-#{$i} {
				animation: martechdata-#{$i} 5s linear infinite;
			}
		}
	}

	a:hover svg {
		#maildata {
			animation: data-forward 5s linear infinite;
		}
	}

	#mail-top,
	#videobox,
	#videotargetcircle,
	#chatbox,
	#bell-middle,
	#person-top,
	#person-bottom,
	#mail-background,
	#mail-top,
	#mail-bottom,
	#automationsbranch,
	#gearcontainer,
	#videotargetline-1,
	#videotargetline-2,
	#videotargetline-3,
	#videotargetline-4,
	#automation-1,
	#automation-2,
	#automation-3,
	#bar-1,
	#bar-2,
	#bar-3,
	#bar-4,
	#point-1,
	#point-2,
	#point-3,
	#point-4,
	#metric-linegraph,
	#glare,
	#bell-bottom,
	#bell-top {
		stroke: var(--color-rock-200);
	}

	#videobox,
	#bar-1,
	#point-1 {
		fill: var(--color-rock-900);
	}
	#bar-2,
	#point-2 {
		fill: var(--color-rock-800);
	}
	#mail-bottom,
	#bar-3,
	#automation-3,
	#point-3,
	#chatline-4 {
		fill: var(--color-rock-700);
	}
	#automation-2,
	#bell-top,
	#point-4,
	#bell-bottom,
	#bar-4,
	#chatline-3 {
		fill: var(--color-rock-600);
	}
	#mail-background,
	#automation-1,
	#gearcontainer,
	#gearcenter,
	#chatline-2 {
		fill: var(--color-rock-500);
	}
	#videoplayicon,
	#automationsline,
	#metricsline,
	#videoadsline,
	#chatboxline,
	#notificationline,
	#mailline,
	#chatline-1 {
		fill: var(--color-rock-400);
	}

	#mail-top,
	#gearbackground,
	#videotargetcircle,
	#chatbox,
	#bell-middle,
	#person-top,
	#person-bottom {
		fill: var(--color-bg-primary);
	}
	svg {
		display: inline-block;
		height: 100%;
		width: 100%;
		padding: var(--s-6) var(--s-9);
	}
</style>
