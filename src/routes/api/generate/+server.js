import { json } from '@sveltejs/kit';
import generateStructure from '$lib/server/generateStructure';
import generateWord from '$lib/server/generateWord';

export async function GET() {
	const structure = generateStructure();
	const spell = [];
	for (const struct of structure) {
		spell.push(await generateWord(struct));
	}
	return json({ spell: spell.filter((item) => item !== '').join(' ') });
}
