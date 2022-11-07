<script lang="ts">
	//swith the theme

	let iconSrc: string;
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
		filter: var(--icon-filter);
		background-image: var(--theme-icon);
		background-size: contain;
		height: 25px;
		width: 25px;
		cursor: pointer;
		width: 25px;
	}
</style>
