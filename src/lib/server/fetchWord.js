import { NINJA_API_KEY } from '$env/static/private';

export default async function fetchWord(partOfSpeech) {
	let res = await fetch(
		`https://api.api-ninjas.com/v1/randomword${partOfSpeech ? `?type=${partOfSpeech}` : ''}`,
		{
			method: 'GET',
			headers: { 'X-API-KEY': NINJA_API_KEY },
			contentType: 'application/json'
		}
	);

	res = await res.json();
	return res.word;
}
