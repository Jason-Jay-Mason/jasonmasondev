<script lang="ts">
	//swith the theme
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

<button on:click={switchTheme}>switch</button>
