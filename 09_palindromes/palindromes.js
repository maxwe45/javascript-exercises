const palindromes = function (string) {
    const forwardArr = [];
    const backArr = [];
    for(var ch of string){
        if(ch !== ',' && ch !== '!' && ch !== '.' && ch !== ' '){
            forwardArr.push(ch.toLowerCase())
        }
    };
    for(var char of forwardArr){backArr.unshift(char)};
    let correct = 0;
    let wrong = 0
    for(let i=0;i<backArr.length;i++){
        if(backArr[i] === forwardArr[i]){
            correct += 1;
        }
        else{wrong+=1;}
    }
    if(wrong!==0){
        return false
    }
    else{
        return true
    }
    
};

// Do not edit below this line
module.exports = palindromes;
