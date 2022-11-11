<script lang="ts">
	//swith the theme

	let iconSrc: string;
	//we store the theme state in local storage so that we can persist between sessions. The initial state is handeled in app.html
	function switchTheme() {
		let theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			localStorage.setItem('theme', 'light');
			document.body.setAttribute('data-theme', 'light');

			iconSrc = '/dark-icon.svg';
		} else {
			localStorage.setItem('theme', 'dark');
			document.body.setAttribute('data-theme', 'dark');

			iconSrc = '/light-icon.svg';
		}
	}
</script>

<div on:click={switchTheme} />

<style lang="scss">
	div {
		transition: all 1s;
		position: relative;
		filter: var(--icon-filter);
		height: 25px;
		width: 25px;
		cursor: pointer;
		width: 25px;
		&::before {
			position: absolute;
			content: '';
			height: 25px;
			width: 25px;
			background-image: var(--theme-icon);
			background-size: contain;
		}
	}
</style>
