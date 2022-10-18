<script>
	import MainHeader from '$lib/components/MainHeader.svelte';
	import SpellCard from '$lib/components/SpellCard.svelte';
</script>

<main>
	<MainHeader />
	<SpellCard />
</main>

<style>
	main {
		display: flex;
		width: 100%;
		align-items: center;
		flex-direction: column;
	}
</style>
