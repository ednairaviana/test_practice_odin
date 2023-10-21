const calculator = require("./calculator");

test("Correct add", () => {
  expect(calculator(2, 4, "add")).toBe(6);
  expect(calculator(4, 4, "add")).toBe(8);
  expect(calculator(10, 10, "add")).toBe(20);
});

test("Correct sub!", () => {
  expect(calculator(4, 2, "sub")).toBe(2);
  expect(calculator(4, 4, "sub")).toBe(0);
  expect(calculator(2, 4, "sub")).toBe(-2);
});

test("Correct mul!", () => {
  expect(calculator(4, 2, "mul")).toBe(8);
  expect(calculator(4, 4, "mul")).toBe(16);
  expect(calculator(5, 3, "mul")).toBe(15);
});

test("Correct div!", () => {
  expect(calculator(4, 2, "div")).toBe(2);
  expect(calculator(4, 4, "div")).toBe(1);
  expect(calculator(5, 3, "div")).toBe(1.6666666666666667);
});

test("No string!", () => {
  expect(calculator("a", 2, "div")).toBe("Invalid type!");
  expect(calculator(2, "b", "div")).toBe("Invalid type!");
});

test("String to number", () => {
  expect(calculator("2", "2", "add")).toBe(4);
  expect(calculator("2", "2", "sub")).toBe(0);
  expect(calculator("2", "2", "mul")).toBe(4);
  expect(calculator("2", "1", "div")).toBe(2);
});
