<script>
	let word = 'duck';
	async function getWords() {
		const response = await fetch('http://localhost:5173/api/generate', { method: 'GET' });
		return await response.json();
	}

	getWords().then((res) => {
		word = res.data;
	});
</script>

<h1>{word}</h1>

<style>
	h1 {
		font-size: 4rem;
		color: deeppink;
	}
</style>
