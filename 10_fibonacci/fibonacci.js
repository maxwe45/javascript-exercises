const fibonacci = function(end) {
    let fibArr = [];
    if(end==0 || end=="0"){return 0}
    else if(end<0){return "OOPS"}
    else{
        for(let i=0;i<end;i++){
            if(i<2){fibArr.push(1)}
            else if(i>=2){
                let next = fibArr[i-2]+fibArr[i-1]
                fibArr.push(next)
            }
        }
    }
    return(fibArr[end-1])
};

// Do not edit below this line
module.exports = fibonacci;
