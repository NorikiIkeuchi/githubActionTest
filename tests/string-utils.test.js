const {
  capitalize,
  reverseString,
  isPalindrome,
  truncate,
  countWords,
} = require("../src/string-utils");

describe("String utilities", () => {
  describe("capitalize", () => {
    test("capitalizes first letter", () => expect(capitalize("hello")).toBe("Hello"));
    test("handles empty string", () => expect(capitalize("")).toBe(""));
    test("throws for non-string", () => {
      expect(() => capitalize(123)).toThrow(TypeError);
    });
  });

  describe("reverseString", () => {
    test("reverses a string", () => expect(reverseString("hello")).toBe("olleh"));
    test("handles single character", () => expect(reverseString("a")).toBe("a"));
  });

  describe("isPalindrome", () => {
    test("detects palindrome", () => expect(isPalindrome("racecar")).toBe(true));
    test("ignores case and spaces", () => expect(isPalindrome("A man a plan a canal Panama")).toBe(true));
    test("detects non-palindrome", () => expect(isPalindrome("hello")).toBe(false));
  });

  describe("truncate", () => {
    test("truncates long string", () => expect(truncate("Hello World!", 8)).toBe("Hello..."));
    test("keeps short string as-is", () => expect(truncate("Hi", 10)).toBe("Hi"));
  });

  describe("countWords", () => {
    test("counts words", () => expect(countWords("hello world foo")).toBe(3));
    test("handles extra spaces", () => expect(countWords("  hello   world  ")).toBe(2));
    test("handles empty string", () => expect(countWords("")).toBe(0));
  });
});
