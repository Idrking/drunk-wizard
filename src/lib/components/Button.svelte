<script>
	export let click;
</script>

<button on:click={click}>
	<slot />
</button>
