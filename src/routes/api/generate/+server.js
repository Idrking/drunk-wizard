import { error, json } from '@sveltejs/kit';
import { NINJA_API_KEY } from '$env/static/private';

export function GET() {
	return json({ data: 'Tigers' });
}
