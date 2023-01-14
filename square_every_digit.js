function squareDigits(num) { 
  return parseInt(num.toString().split('').map(n => n**2).join(''))
}