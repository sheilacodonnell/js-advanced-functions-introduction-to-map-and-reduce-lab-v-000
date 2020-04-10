
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

// function reduceToTotal(numbers) {
//   numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   });
// }

function reduceToTotal(numbers, startingPoint = 0) {
    
  return numbers.reduce(function(total, currentValue) {
            return total + currentValue
        }, startingPoint)

}