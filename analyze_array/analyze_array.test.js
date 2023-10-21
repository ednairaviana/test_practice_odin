const analyzeArray = require("./analyze_array");

test("It works", () => {
  const obj = analyzeArray([6, 10, 20, 5, 2, 4]);

  expect(obj.length).toBe(6);
  expect(obj.min).toBe(2);
  expect(obj.max).toBe(20);
  expect(obj.average).toBe(8);
});
