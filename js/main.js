fizzBuzzA = (value1, value2) => {
  let resultValue = ""
  for (let i = 1; i <= 100; i++) {
    if (i % value1 === 0 && i % value2 === 0) {
      resultValue += `<strong>Fizz-Buzz</strong> `
    } else if (i % value1 === 0) {
      resultValue += `fizz `
    } else if (i % value2 === 0) {
      resultValue += `buzz `
    } else {
      resultValue += `${i} `
    }
  }
  return resultValue
}

buzzIt = () => {
  let output = ""
  let value1 = document.getElementById("fizzValue").value
  let value2 = document.getElementById("buzzValue").value
  output = fizzBuzzA(value1, value2)
  document.getElementById("results").innerHTML = output
}
