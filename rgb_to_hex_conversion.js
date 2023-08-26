/*
The rgb function is incomplete. Complete it so that passing in RGB decimal
values will result in a hexadecimal representation being returned.
Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

function rgb(r, g, b){
    if(typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
        return "not number!"
    }
    
    const converter = (num) => {
        const roundedNum = num > 255 ? 255 
        : num < 0 ? 0 
        : Math.round(num)
        
        let hexNum = Number(roundedNum).toString(16)
        if(hexNum.length === 1) {
            hexNum += 0
            hexNum = hexNum.split('').reverse().join('')
        }
        return hexNum.toUpperCase()
    }

    const result = [converter(r),converter(g),converter(b)].join('')

    return result
}
