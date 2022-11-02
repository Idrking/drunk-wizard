/*
Structure Object Format:
wordType(STRING): Part of speech, must be name, noun, verb, adjective, adverb or set.
word(STRING): Required if wordType set to "set", the word that will be added to the sentence
optional(BOOL): Whether this word can be skipped without affecting the readability of the spell
probability(NUMBER): Number between 1 - 20 (inclusive); higher numbers mean less chance the word is added. Not required if optional is false
*/

const structures = [
	[
		{ wordType: 'name', optional: true, probability: 16 },
		{ wordType: 'adjective', optional: true, probability: 5 },
		{ wordType: 'noun', optional: false },
		{ wordType: 'noun', optional: true, probability: 18 }
	],
	[
		{ wordType: 'name', optional: true, probability: 16 },
		{ wordType: 'adjective', optional: true, probability: 8 },
		{ wordType: 'noun', optional: false },
		{ wordType: 'set', optional: false, word: 'of' },
		{ wordType: 'adjective', optional: true, probability: 13 },
		{ wordType: 'noun', optional: false }
	],
	[
		{ wordType: 'name', optional: true, probability: 16 },
		{ wordType: 'adjective', optional: true, probability: 8 },
		{ wordType: 'noun', optional: false },
		{ wordType: 'set', optional: false, word: 'of' },
		{ wordType: 'adverb', optional: true, probability: 17 },
		{ wordType: 'verb', optional: false }
	],
	[
		{ wordType: 'set', optional: false, word: 'Conjure' },
		{ wordType: 'name', optional: true, probability: 17 },
		{ wordType: 'adverb', optional: true, probability: 18 },
		{ wordType: 'adjective', optional: true, probability: 8 },
		{ wordType: 'noun', optional: false }
	],
	[
		{ wordType: 'set', optional: false, word: 'Summon' },
		{ wordType: 'name', optional: true, probability: 16 },
		{ wordType: 'adverb', optional: true, probability: 18 },
		{ wordType: 'adjective', optional: true, probability: 9 },
		{ wordType: 'noun', optional: false }
	],
	[
		{ wordType: 'verb', optional: false },
		{ wordType: 'name', optional: true, probability: 16 },
		{ wordType: 'adverb', optional: true, probability: 18 },
		{ wordType: 'adjective', optional: true, probability: 9 },
		{ wordType: 'noun', optional: false }
	],
	[
		{ wordType: 'set', optional: false, word: 'Greater' },
		{ wordType: 'adjective', optional: true, probability: 16 },
		{ wordType: 'noun', optional: false }
	],
	[
		{ wordType: 'set', optional: false, word: 'Lesser' },
		{ wordType: 'adjective', optional: true, probability: 16 },
		{ wordType: 'noun', optional: false }
	]
];

export default structures;
