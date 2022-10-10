import { error, json } from '@sveltejs/kit';
import { NINJA_API_KEY } from '$env/static/private';

export async function GET() {
	let res = await fetch('https://api.api-ninjas.com/v1/randomword', {
		method: 'GET',
		headers: { 'X-API-KEY': NINJA_API_KEY },
		contentType: 'application/json'
	});

	res = await res.json();

	return json({ data: res.word });
}
