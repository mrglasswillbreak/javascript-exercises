const fibonacci = function(fibArg) {
	let count
  if (typeof fibArg !== 'number') {
      count = parseInt(fibArg);
  } else {
      count = fibArg;
  }
	
	
	if (count === 1 || count === 2) return 1; // first two numbers are 1
    let a = 1, b = 1;
    for (let i = 3; i <= count; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
