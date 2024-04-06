const sumAll = function(start,end) {
if(typeof start !== typeof end){
    return('ERROR')
};
if(start < 0 || end < 0){return('ERROR')};
let sum = 0;
if(start<end){
while(start<=end){
    sum += start;
    start++;
}}
else if(start>end){
while(start>=end){
    sum += start;
    start--;
}}
return(sum);
};

// Do not edit below this line
module.exports = sumAll;
