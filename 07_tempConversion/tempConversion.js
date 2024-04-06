const convertToCelsius = function(tempF) {
  answer = ((tempF - 32) * (5/9))
  const answerRounded = Math.round(answer*10)/10
  return(answerRounded)
};

const convertToFahrenheit = function(tempC) {
  answer = (tempC * (9/5) + 32)
  const answerRounded = Math.round(answer*10)/10
  return(answerRounded)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
