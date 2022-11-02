import structures from '../structures';

const generateStructure = () => {
	return structures[Math.floor(Math.random() * structures.length)];
};

export default generateStructure;
