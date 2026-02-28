const palindromes = function (string) {
	const isLetterNumber = 'abcdefghijklmnopqrstuvwxyz0123456789';
	
	const cleaned = string
	.toLowerCase()
	.split("")
	.filter(letter => isLetterNumber.includes(letter))
	.join("");
	
	const reversed = cleaned.split("").reverse().join("");
	return reversed === cleaned;
};

// Do not edit below this line
module.exports = palindromes;
