module.exports = function getZerosCount(number) {
  let zeroCounter = 0;
  while (number = Math.floor(number/5)){
    zeroCounter += number;
  }
  return zeroCounter;
  
}
