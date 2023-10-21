function reverseString(string) {
  const arr = string.split("");

  let reversed = "";
  for (let i = (arr.length - 1); i >= 0; i--) {
    reversed += arr[i];
  }

  return reversed;
}

module.exports = reverseString;
