/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.*/
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