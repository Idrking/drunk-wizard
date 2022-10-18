export default async function getWords() {
	const response = await fetch('http://localhost:5173/api/generate', { method: 'GET' });
	const data = await response.json();
	if (response.ok) {
		return data.spell;
	}
	throw new Error(data);
}
