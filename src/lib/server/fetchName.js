import { NINJA_API_KEY } from '$env/static/private';

export default async function fetchName() {
	const searchLetter = String.fromCharCode(Math.floor(65 + Math.random() * (90 - 65 + 1)));

	let res = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${searchLetter}`, {
		method: 'GET',
		headers: { 'X-API-KEY': NINJA_API_KEY },
		contentType: 'application/json'
	});

	res = await res.json();

	return res[Math.floor(Math.random() * 29)].name;
}
