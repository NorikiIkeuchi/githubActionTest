const { add, subtract, multiply, divide, fibonacci, isPrime, clamp } = require("../src/math");

describe("Math utilities", () => {
  describe("add", () => {
    test("adds two positive numbers", () => expect(add(2, 3)).toBe(5));
    test("adds negative numbers", () => expect(add(-1, -2)).toBe(-3));
    test("adds zero", () => expect(add(5, 0)).toBe(5));
  });

  describe("subtract", () => {
    test("subtracts two numbers", () => expect(subtract(5, 3)).toBe(2));
    test("returns negative result", () => expect(subtract(3, 5)).toBe(-2));
  });

  describe("multiply", () => {
    test("multiplies two numbers", () => expect(multiply(3, 4)).toBe(12));
    test("multiplies by zero", () => expect(multiply(5, 0)).toBe(0));
  });

  describe("divide", () => {
    test("divides two numbers", () => expect(divide(10, 2)).toBe(5));
    test("throws on division by zero", () => {
      expect(() => divide(10, 0)).toThrow("Division by zero");
    });
  });

  describe("fibonacci", () => {
    test("returns 0 for n=0", () => expect(fibonacci(0)).toBe(0));
    test("returns 1 for n=1", () => expect(fibonacci(1)).toBe(1));
    test("returns 55 for n=10", () => expect(fibonacci(10)).toBe(55));
    test("throws for negative input", () => {
      expect(() => fibonacci(-1)).toThrow("Negative number not allowed");
    });
  });

  describe("clamp", () => {
    test("returns value when within range", () => expect(clamp(5, 0, 10)).toBe(5));
    test("returns min when value is below range", () => expect(clamp(-3, 0, 10)).toBe(0));
    test("returns max when value is above range", () => expect(clamp(15, 0, 10)).toBe(10));
    test("throws when min > max", () => {
      expect(() => clamp(5, 10, 0)).toThrow("min must be less than or equal to max");
    });
  });

  describe("isPrime", () => {
    test("2 is prime", () => expect(isPrime(2)).toBe(true));
    test("7 is prime", () => expect(isPrime(7)).toBe(true));
    test("4 is not prime", () => expect(isPrime(4)).toBe(false));
    test("1 is not prime", () => expect(isPrime(1)).toBe(false));
  });
});
