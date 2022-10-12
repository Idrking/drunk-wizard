import { json } from '@sveltejs/kit';
import fetchWord from '$lib/server/fetchWord';
import fetchName from '../../../lib/server/fetchName';

export async function GET() {
	let res = await fetchWord('verb');
	let nothing = await fetchName();

	return json({ data: res, name: nothing });
}
