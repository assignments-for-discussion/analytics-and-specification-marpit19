function average(numbers) {
    if (numbers.length === 0) return NaN;
    else {
        numbers = numbers.filter((n) => typeof n == 'number' && !isNaN(n));
        return numbers.reduce((p, c) => p + c, 0) / numbers.length;
    }
}

module.exports = { average };
