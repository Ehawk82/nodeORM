function nodeorm(x) { 
	var z;
	if (x === 0) { z = "VERY LIKLEY" };
	if (x === 1) { z = "LIKELY" };
	if (x === 2) { z = "EVEN" };
	if (x === 3) { z = "UNLIKELY" };
	if (x === 4) { z = "VERY UNLIKELY" };
	return z
};

module.exports = { nodeorm: nodeorm };