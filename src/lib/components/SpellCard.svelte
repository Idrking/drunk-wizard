<script>
	import getWords from '$lib/getWords.js';
	import LoadingSpinner from './LoadingSpinner.svelte';
	let spellPromise;

	async function handleClick() {
		spellPromise = getWords();
	}
</script>

<article>
	{#if spellPromise}
		{#await spellPromise}
			<LoadingSpinner />
		{:then spell}
			<p>{spell}</p>
		{/await}
	{/if}
	<button on:click={handleClick}>Ham</button>
</article>

<style>
	article {
		background-color: var(--secondary);
		color: white;
		min-width: 50%;
		max-width: max(80%, 400px);
		min-height: 400px;
		border-radius: var(--spacing-m);
		padding: var(--spacing-l);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		font-family: var(--header-font);
		font-weight: 700;
		text-transform: capitalize;
		font-size: 3rem;
		margin-top: var(--spacing-xxl);
		box-shadow: var(--shadow-elevation-medium);
		filter: drop-shadow(var(--shadow-elevation-high));
	}
</style>
