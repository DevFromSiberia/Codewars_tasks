function toCamelCase(str) {
  const copyStr = str;
  const arrFromStr = copyStr.split('');
  const forbiddenChar = ['-', '_'];

  arrFromStr.forEach((char, index) => {
    if (forbiddenChar.includes(char)) {
      arrFromStr[index + 1] = arrFromStr[index + 1].toUpperCase()
      arrFromStr.splice(index, 1)
    }
  })

  return arrFromStr.join('');
}