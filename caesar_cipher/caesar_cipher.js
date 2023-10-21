function caesarCipher(string, shift) {
  if (shift > 25 || shift < 1) {
    return "Shift needs to be lower than 25 and bigger than 1!";
  } else {
    const parsedString = string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    let text = "";
    for (let i = 0; i < parsedString.length; i++) {
      const code = parsedString.charCodeAt(i);

      if (code < 97 || code > 122) {
        text += String.fromCharCode(code);
      } else if (code + shift > 122) {
        text += String.fromCharCode(96 + (shift - (122 - code)));
      } else {
        text += String.fromCharCode(code + shift);
      }
    }

    return text;
  }
}

module.exports = caesarCipher;
