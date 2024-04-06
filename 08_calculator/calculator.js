const add = function(num1,num2) {
	const ans = num1+num2;
  return ans;
}; ///good

const subtract = function(num1,num2) {
	const ans = num1-num2;
  return(ans);
};///good

const sum = function(nums) {
  return nums.reduce((total,current) => total + current, 0);
  ///good
};

const multiply = function(nums) {
  let ans = 1;
  parseInt(nums);
  for(let num of nums){
    ans = num * ans;
  }
  return ans;
  ///good
};

const power = function(num1,num2) {
	let ans = 1;
  let index = 0;
  const pow = [];
  while(index<num2){
    pow.push(num1)
    index++;
  }
  for(pwr of pow){
    ans = pwr * ans
  };
  return(ans)
  ///goood
};

const factorial = function(num) {
  let ans=1;
if(num>1){
for(let i=0;num>0;i++){
  ans = ans*num;
  num--;
}}
else if(num===0){
  ans = 1;
}
else if(num===1){
  ans = 1;
}
return(ans)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
