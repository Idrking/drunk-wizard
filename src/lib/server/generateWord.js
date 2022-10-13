import fetchWord from './fetchWord';
import fetchName from './fetchName';
import rollDice from '../rollDice';

async function generateWord(structure) {
	if (structure.wordType == 'set' && wontBeSkipped(structure)) {
		return structure.word;
	}

	if (structure.wordType == 'name' && wontBeSkipped(structure)) {
		return await fetchName();
	}

	if (wontBeSkipped(structure)) {
		return await fetchWord(structure.wordType);
	}

	return '';
}

const wontBeSkipped = (structure) => {
	if (structure.optional) {
		return rollDice(structure.probability);
	}
	return true;
};

export default generateWord;
