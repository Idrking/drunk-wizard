<script>
	let word = '';
	async function getWords() {
		const response = await fetch('http://localhost:5173/api/generate', { method: 'GET' });
		const data = await response.json();
		word = data.spell;
		return;
	}
	async function newWord() {
		const newWord = await getWords();
		word = newWord.data;
	}
</script>

<h1>{word}</h1>
<button on:click={newWord}>New Word!</button>

<style>
	h1 {
		font-size: 4rem;
		color: var(--orange-main);
	}
</style>
