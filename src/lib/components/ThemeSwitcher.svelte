<script lang="ts">
	//swith the theme

	//We store the theme state in local storage so that we can persist between sessions.
	//The initial state is handeled in app.html
	function switchTheme() {
		let theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			localStorage.setItem('theme', 'light');
			document.body.setAttribute('data-theme', 'light');
		} else {
			localStorage.setItem('theme', 'dark');
			document.body.setAttribute('data-theme', 'dark');
		}
	}
</script>

<div on:click={switchTheme} />

<style lang="scss">
	div {
		cursor: pointer;
		position: relative;
		height: 25px;
		width: 25px;
		filter: var(--icon-filter);
		&::before {
			content: '';
			position: absolute;
			height: 25px;
			width: 25px;
			background-image: var(--theme-icon);
			background-size: contain;
		}
	}
</style>
