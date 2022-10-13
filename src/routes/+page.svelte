<script>
	let word = 'duck';
	let name = String.fromCharCode(Math.floor(65 + Math.random() * (90 - 65 + 1)));
	async function getWords() {
		const response = await fetch('http://localhost:5173/api/generate', { method: 'GET' });
		return await response.json();
	}

	getWords().then((res) => {
		word = res.spell;
		name = res.name;
	});

	async function newWord() {
		const newWord = await getWords();
		word = newWord.data;
	}
</script>

<h1>{word}</h1>
<h1>{name}</h1>
<button on:click={newWord}>New Word!</button>

<style>
	h1 {
		font-size: 4rem;
		color: deeppink;
	}
</style>
