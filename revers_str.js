/*Complete the solution so that it reverses the string passed into it.*/
function solution(str) {
    const arr = str.split('')
    arr.reverse()
    str = arr.join('')
    return str
}

