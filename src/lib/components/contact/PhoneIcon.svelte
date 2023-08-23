<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="phone-icon" clip-path="url(#clip0_962_44)">
		<g id="phone-icon_2">
			<path
				id="telephone"
				d="M5.92369 12.0634L6.04864 11.9385C7.4973 10.4898 9.84606 10.4898 11.2947 11.9385L11.6556 12.2994C13.3036 13.9473 13.3036 16.6193 11.6556 18.2673L11.5112 18.4117C9.35545 20.5674 9.35545 24.0626 11.5112 26.2184L20.878 35.5851C23.0337 37.7409 26.5289 37.7409 28.6847 35.5851L28.9655 35.3043C30.5382 33.7316 33.0879 33.7316 34.6606 35.3043L34.8892 35.5329C36.3356 36.9793 36.3356 39.3243 34.8892 40.7707C30.1145 45.5454 22.3878 45.8433 17.1686 41.5256C12.7896 37.9028 8.70383 33.8207 5.08966 29.4369C0.850931 24.2955 1.21195 16.7751 5.92369 12.0634Z"
				fill="#D8D8D8"
				stroke="#3D3834"
				stroke-width="2"
			/>
			<g id="Group 63">
				<path
					id="phone-message"
					d="M30.2854 21.4179L24.0805 25.9705V22.2241V21.2241H23.0805H19.7492V5H46.0472V21.2241H30.8769H30.5494L30.2854 21.4179Z"
					stroke="#3D3834"
					stroke-width="2"
				/>
			</g>
			<circle
				id="phone-message-dot-1"
				cx="25.566"
				cy="13.1019"
				r="2.32713"
				fill="#FDFDFD"
				stroke="#828282"
				stroke-width="0.7"
			/>
			<circle
				id="phone-message-dot-2"
				cx="33.0619"
				cy="13.1019"
				r="2.32713"
				fill="#E2E2E2"
				stroke="#828282"
				stroke-width="0.7"
			/>
			<circle
				id="phone-message-dot-3"
				cx="40.5579"
				cy="13.1019"
				r="2.32713"
				fill="#C8C8C8"
				stroke="#828282"
				stroke-width="0.7"
			/>
		</g>
	</g>
	<defs>
		<clipPath id="clip0_962_44">
			<rect width="48" height="48" fill="white" />
		</clipPath>
	</defs>
</svg>

<style lang="scss">
	svg {
		width: 100%;
		height: 100%;
	}
	@for $i from 1 to 4 {
		#phone-message-dot-#{$i} {
			stroke: var(--color-rock-100);
			fill: var(--color-rock-#{$i + 3}00);
		}
	}
	#phone-message,
	#telephone {
		stroke: var(--color-rock-100);
	}
	#phone-message {
		fill: var(--color-rock-900);
	}
	#telephone {
		fill: var(--color-rock-600);
	}
</style>
