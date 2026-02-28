const add = function(A, B) {
	return A + B;
};

const subtract = function(A, B) {
	return A - B;
};

const sum = function(array) {
	return array.reduce((sum, item) => sum + item, 0);
};

const multiply = function(areay) {
	return array.reduce((multiple, item) => multiple * item, 1)://used one as initial multiplier cause multiplying by zero equals zero
};

const power = function(A, B) {
	return A ** B;
};

const factorial = function(N) {
	let result = 1;
	for (let i = 2; i <= N; i++) {
		result *= i;
	}
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
