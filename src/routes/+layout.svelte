<script>
	import '@fontsource/amatic-sc';
	import '@fontsource/chivo';
	import '@fontsource/pompiere';
</script>

<div>
	<slot />
</div>

<style>
	:global(html) {
		--header-font: 'Amatic SC', cursive;
		--subheader-font: 'Pompiere', cursive;
		--body-font: 'Chivo', sans-serif;
		background-color: var(--background-three);
	}

	div {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		background: radial-gradient(
				circle at 105% 130%,
				var(--background) 0%,
				var(--background) 49.99%,
				transparent 50%,
				transparent 100%
			),
			radial-gradient(
				circle at 10% 80%,
				var(--background-two) 0%,
				var(--background-two) 49.99%,
				transparent 50%,
				transparent 100%
			);
	}
</style>
