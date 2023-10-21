const capitalize = require("./capitalize");

test("It's capitalize", () => {
  const string = capitalize("caNeta AzuL, AZUL canEta");
  const firstLetter = string.slice(0, 1);
  const sentence = string.slice(1, string.length);

  expect(firstLetter).toBe(firstLetter.toUpperCase());
  expect(sentence).toBe(sentence.toLowerCase());
});

test("First letter is string", () => {
  const string = capitalize("caNeta AzuL, AZUL canEta");
  const firstLetter = string.slice(0, 1);

  expect(typeof firstLetter).toBe("string");
});
