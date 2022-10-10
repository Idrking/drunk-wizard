<script>
	let word = 'duck';
	async function getWords() {
		const response = await fetch('http://localhost:5173/api/generate', { method: 'GET' });
		return await response.json();
	}

	getWords().then((res) => {
		word = res.data;
	});

	async function newWord() {
		console.log('running');
		const newWord = await getWords();
		word = newWord.data;
	}
</script>

<h1>{word}</h1>
<button on:click={newWord}>New Word!</button>

<!-- 
<script>
	let word = 'duck';
	async function getWords() {
		const response = await fetch('http://localhost:5173/api/generate', { method: 'GET' });
		return await response.json();
	}

	getWords().then((res) => {
		word = res.data;
	}); -->
<style>
	h1 {
		font-size: 4rem;
		color: deeppink;
	}
</style>
