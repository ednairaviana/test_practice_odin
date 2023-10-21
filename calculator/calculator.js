function calculator(a, b, operation) {
  const x = parseInt(a);
  const y = parseInt(b);

  if (isNaN(x) || isNaN(y)) {
    return "Invalid type!";
  } else {
    switch (operation) {
      case "add":
        return x + y;
        break;
      case "sub":
        return x - y;
        break;
      case "mul":
        return x * y;
        break;
      case "div":
        return x / y;
        break;
    }
  }
}

module.exports = calculator;
