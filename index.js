const numbers = [1,2,3,4]

function mapToNegativize(numbers) {
  return numbers.map(n => -n )
}

function mapToNoChange(numbers) {
  return numbers.map(n => n)
}

function mapToDouble(numbers) {
  return numbers.map(n => n * 2)
}

function mapToSquare(numbers) {
  return numbers.map(n => n * n)
}

function reduceToTotal(numbers) {
  numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

	const reduceToTotal = (arr, num = 0) => {
    let total = num
    for (const x of arr) { total += parseInt(x) }
    return total
}