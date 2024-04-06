const repeatString = function(string, num) {
let newString=string;
if(num<0){return('ERROR')};
if(num===0){return('')};
while(num>1){
    newString += string;
    num--
}
return newString
};

// Do not edit below this line
module.exports = repeatString;
