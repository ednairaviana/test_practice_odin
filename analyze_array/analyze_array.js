function analyzeArray(array) {
  const object = {
    average: null,
    min: null,
    max: null,
    length: array.length,
  };

  //   min max
  const sortedArray = array.sort(function (a, b) {
    return a - b;
  });

  object.min = sortedArray[0];
  object.max = sortedArray.reverse()[0];

  //   average
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });

  object.average = Math.round(sum / object.length);

  return object;
}

module.exports = analyzeArray;
