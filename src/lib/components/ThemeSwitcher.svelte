<script lang="ts">
	function switchTheme() {
		let theme = localStorage.getItem("theme")
		if (theme === "dark") {
			localStorage.setItem("theme", "light")
			document.body.setAttribute("data-theme", "light")
		} else {
			localStorage.setItem("theme", "dark")
			document.body.setAttribute("data-theme", "dark")
		}
	}
</script>

<div on:click={switchTheme} />

<style lang="scss">
	div {
		position: relative;
		height: 100%;
		width: 100%;
		cursor: pointer;
		filter: var(--icon-filter);
		&::before {
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			background-image: var(--theme-icon);
			background-size: contain;
		}
	}
</style>
