const express = require("express");
const { add, subtract, multiply, divide, fibonacci, isPrime } = require("./math");
const { capitalize, reverseString, isPalindrome } = require("./string-utils");

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "GitHub Actions Playground",
    version: "1.0.0",
    endpoints: [
      "GET  /health",
      "POST /math/calc",
      "GET  /math/fibonacci/:n",
      "GET  /math/prime/:n",
      "POST /string/capitalize",
      "POST /string/reverse",
      "POST /string/palindrome",
    ],
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/math/calc", (req, res) => {
  const { operation, a, b } = req.body;
  const ops = { add, subtract, multiply, divide };
  if (!ops[operation]) {
    return res.status(400).json({ error: `Unknown operation: ${operation}` });
  }
  try {
    const result = ops[operation](a, b);
    return res.json({ operation, a, b, result });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

app.get("/math/fibonacci/:n", (req, res) => {
  try {
    const n = parseInt(req.params.n, 10);
    return res.json({ n, result: fibonacci(n) });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

app.get("/math/prime/:n", (req, res) => {
  const n = parseInt(req.params.n, 10);
  return res.json({ n, isPrime: isPrime(n) });
});

app.post("/string/capitalize", (req, res) => {
  return res.json({ result: capitalize(req.body.text || "") });
});

app.post("/string/reverse", (req, res) => {
  return res.json({ result: reverseString(req.body.text || "") });
});

app.post("/string/palindrome", (req, res) => {
  return res.json({ result: isPalindrome(req.body.text || "") });
});

module.exports = app;
