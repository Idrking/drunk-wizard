import structures from '../structures';

const generateStructure = () => {
	return structures[Math.floor(Math.random() * (structures.length - 1))];
};

export default generateStructure;
