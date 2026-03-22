const request = require("supertest");
const app = require("../src/app");

describe("API endpoints", () => {
  test("GET / returns app info", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("GitHub Actions Playground");
  });

  test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  test("POST /math/calc adds two numbers", async () => {
    const res = await request(app)
      .post("/math/calc")
      .send({ operation: "add", a: 2, b: 3 });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("POST /math/calc rejects unknown operation", async () => {
    const res = await request(app)
      .post("/math/calc")
      .send({ operation: "power", a: 2, b: 3 });
    expect(res.status).toBe(400);
  });

  test("GET /math/fibonacci/10 returns 55", async () => {
    const res = await request(app).get("/math/fibonacci/10");
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(55);
  });

  test("GET /math/prime/7 returns true", async () => {
    const res = await request(app).get("/math/prime/7");
    expect(res.status).toBe(200);
    expect(res.body.isPrime).toBe(true);
  });

  test("POST /string/capitalize works", async () => {
    const res = await request(app)
      .post("/string/capitalize")
      .send({ text: "hello" });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe("Hello");
  });

  test("POST /string/reverse works", async () => {
    const res = await request(app)
      .post("/string/reverse")
      .send({ text: "hello" });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe("olleh");
  });

  test("POST /string/palindrome detects palindrome", async () => {
    const res = await request(app)
      .post("/string/palindrome")
      .send({ text: "racecar" });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(true);
  });
});
