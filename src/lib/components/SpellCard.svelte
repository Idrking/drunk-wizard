<script>
	import getWords from '$lib/getWords.js';
	let spell = '';
	let loading = false;

	let spellPromise;

	async function handleClick() {
		spellPromise = getWords();
	}
	// async function getWords() {
	// 	const response = await fetch('http://localhost:5173/api/generate', { method: 'GET' });
	// 	const data = await response.json();
	// 	spell = data.spell;
	// 	return;
	// }
	// async function newWord() {
	// 	const newWord = await getWords();
	// 	word = newWord.data;
	// }
</script>

<article>
	{#if spellPromise}
		{#await spellPromise}
			<p>Loading</p>
		{:then spell}
			<p>{spell}</p>
		{/await}
	{/if}
	<button on:click={handleClick}>Ham</button>
</article>

<style>
	article {
		background-color: var(--tertiary);
		min-width: 300px;
		min-height: 300px;
		border-radius: var(--spacing-m);
		border: 8px solid var(--stroke);
		padding: var(--spacing-s);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
