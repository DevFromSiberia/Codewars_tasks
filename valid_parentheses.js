function validParentheses(parens) {
  const copyParens = parens

  const arr = copyParens.split('')
  let result = false

  if (+arr.length === 0) {
    return true
  }

  while (+arr.length !== 0) {
    if (arr[0] === ')' || arr.every(item => (item === '(')) || arr.every(item => (item === ')'))) {
      result = false
      break
    } else {
      arr.forEach((item, index) => {
        if (item === '(' && arr[index + 1] === ')') {
          arr.splice(index, 2)
        }
      });
      result = true
    }
  }
  return result
}