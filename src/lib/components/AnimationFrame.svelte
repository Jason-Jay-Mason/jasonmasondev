<!-- 
This is a helper component that requires a progress prop to be declared and bound on the parent component ie <AnimationFrame bind:progress ...
The progress prop is updated to reflect the percent that the user has scrolled through the animation frame. The height of the animation frame 
is also a required prop and is an arbitrary value dependant on design requirments. We let the opacity of the slot be a function of the progress 
because we dont want to show the contents until we know the progress so that there are not elements shifting when the page loads
-->
<script lang="ts">
	import { windowScroll } from '$lib/actions/window-scroll.js'; //The window scroll is a simple scroll event listener attached to the window so that we can track scroll values.
	export let frameHeight: string;
	export let progress: number;
	export let classes;

	let frame: HTMLElement; //A binding that is set to the frame div

	//Here we need to update the progress on initial load just in case the user has scrolled down the page at all.
	//If we don't do this, then the progress does not update until the user scrolls
	$: {
		if (frame) {
			updateProgress();
		}
	}

	//Update the scroll progress as the user srolls through the frame div
	function updateProgress() {
		let { y, height } = frame.getBoundingClientRect(); //getBoundingClientRect is documented on Moz
		let start = y - window.innerHeight; //Making the y position 0 when the bottom of the screen enters the frame div

		//we don't care to update the progress if we are not viewing the frame div yet
		if (start <= 0) {
			let frameLeft = height + start; //Addition is not intuitive here but we do this because we recieve a negative value from y when we enter into the frame. So it gets the amount of the frame we have left to scroll trhough in px.
			progress = 1 - frameLeft / height; //This gets us the % scroll through the frame
		}
	}

	const frameStyles = `${classes} scroll-container`; //Injecting added css classes
</script>

<div
	use:windowScroll
	on:windowscroll={updateProgress}
	class={frameStyles}
	style={`height:${frameHeight}`}
	bind:this={frame}
>
	<div style={`opacity:${progress ? 1 : 0}`} class="sticky">
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../theme/breakpoints.scss';
	.scroll-container {
		position: relative;
	}
	.sticky {
		position: sticky;
		top: 0;
	}
</style>
