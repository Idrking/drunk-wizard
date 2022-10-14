<script>
	import '@fontsource/amatic-sc';
	import '@fontsource/chivo';
	import '@fontsource/pompiere';
</script>

<slot />

<style>
	:global(html) {
		--header-font: 'Amatic SC', cursive;
		--subheader-font: 'Pompiere', cursive;
		--body-font: 'Chivo', sans-serif;
	}
</style>
