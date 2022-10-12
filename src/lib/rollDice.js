const rollDice = (target) => {
	const result = Math.floor(Math.random() * 20) + 1;
	return result >= target;
};

export default rollDice;
