function capitalize(str) {
  if (typeof str !== "string") throw new TypeError("Expected a string");
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (typeof str !== "string") throw new TypeError("Expected a string");
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  if (typeof str !== "string") throw new TypeError("Expected a string");
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function truncate(str, maxLength, suffix = "...") {
  if (typeof str !== "string") throw new TypeError("Expected a string");
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

function countWords(str) {
  if (typeof str !== "string") throw new TypeError("Expected a string");
  return str
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

module.exports = { capitalize, reverseString, isPalindrome, truncate, countWords };
