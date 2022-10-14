<script>
	import MainHeader from '$lib/components/MainHeader.svelte';
	import Github from '$lib/components/icons/Github.svelte';
	import Message from '$lib/components/icons/Message.svelte';
	import Wand from '$lib/components/icons/Wand.svelte';

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

<MainHeader />
<Github --size="200px" color="#f582ae" />
<Wand --size="200px" />
<Message --size="200px" />
