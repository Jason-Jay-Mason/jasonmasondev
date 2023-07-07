<svg width="fit" height="fit" viewBox="0 0 35 56" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g id="trash-icon">
		<g id="trashcan">
			<path
				id="Rectangle 227"
				d="M3 17H32V46C32 48.2091 30.2091 50 28 50H7C4.79086 50 3 48.2091 3 46V17Z"
				stroke="#3D3834"
				stroke-width="2"
			/>
			<g id="Frame 58">
				<rect id="Rectangle 232" x="9" y="22" width="2" height="23" fill="#3D3834" />
				<rect id="Rectangle 229" x="17" y="22" width="2" height="23" fill="#3D3834" />
				<rect id="Rectangle 233" x="25" y="22" width="2" height="23" fill="#3D3834" />
			</g>
		</g>
		<g id="trashlid">
			<rect
				id="Rectangle 230"
				x="1"
				y="17"
				width="6"
				height="33"
				transform="rotate(-90 1 17)"
				stroke="#3D3834"
				stroke-width="2"
			/>
			<rect
				id="Rectangle 231"
				x="14"
				y="11"
				width="4"
				height="8"
				rx="1"
				transform="rotate(-90 14 11)"
				stroke="#3D3834"
				stroke-width="2"
			/>
		</g>
	</g>
</svg>

<style lang="scss">
	svg {
		g,
		rect,
		path {
			stroke: var(--color-rock-100);
		}
	}
	svg:hover {
		#trashlid {
			transition: all 0.2s;
			transform: translateY(-4px);
		}
	}
</style>
