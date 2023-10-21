const caesarCipher = require("./caesar_cipher");

test("It's cipher!", () => {
  expect(caesarCipher("ABCD", 1)).toBe("bcde");
});

test("It's ciclic!", () => {
  expect(caesarCipher("abcd", 25)).toBe("zabc");
  expect(caesarCipher("xyza", 1)).toBe("yzab");
  expect(caesarCipher("za", 25)).toBe("yz");
});

test("It's filtered!", () => {
  expect(caesarCipher("ÀBcdé", 1)).toBe("bcdef");
});

test("Respect spaces and punctuation!", () => {
  expect(caesarCipher("Caneta azul, azul caneta!!", 1)).toBe(
    "dbofub bavm, bavm dbofub!!"
  );
});
