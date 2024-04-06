const reverseString = function(string) {
    let arrayString = [];
    let final = '';
    for(let char of string){
        arrayString.unshift(char)
    }
    for(let character of arrayString){
        final += character
    }
    return(final)
};

// Do not edit below this line
module.exports = reverseString;
