module.exports = function zeros(expression) {
  let numbers = expression.split('*');
  let result = 0;
  let two = 0, five = 0, ten = 0; //factors

  for (let i = 0; i < numbers.length; i++) {
    let value = parseInt(numbers[i]);
    if (numbers[i][numbers[i].length - 2] != '!') {
      for (let k = value; k > 0; k -= 1) {
        (k % 2 == 0) ? two++ : 0;
        (k % 5 == 0) ? five++ : 0;
        (k % 25 == 0) ? five++ : 0;
      }
    } else if (value % 2 == 0) {
      for (let k = value; k > 0; k -= 2) {
        (k % 2 == 0) ? two++ : 0;
        (k % 10 == 0) ? ten++ : 0;
        (k % 50 == 0) ? five++ : 0;
      }
    } else {
      for (let k = value; k > 0; k -= 2) {
        (k % 5 == 0) ? five++ : 0;
        (k % 25 == 0) ? five++ : 0;
      }
    }
  }
  return (ten + Math.min(two, five));
}