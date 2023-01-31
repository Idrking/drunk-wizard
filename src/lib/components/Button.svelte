<script>
	export let click;
</script>

<button on:click={click}>
	<slot />
</button>

<style>
	button {
		border: none;
		border-radius: var(--spacing-s);
		padding: var(--spacing-m);
		font-size: 2.2rem;
	}
</style>
