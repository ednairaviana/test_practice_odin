const reverseString = require("./reverse_string")

test("It's reverse!",() => {
    expect(reverseString("Caraio")).toBe("oiaraC");
})