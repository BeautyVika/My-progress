function sum (numbers) {
    if (!numbers){return 0}
    return numbers.reduce(function(sum, current) {
  return sum + current;
}, 0);
};