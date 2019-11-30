const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("controller", () => {
  const mock = { count: 0 };
  const result = { count: 1 };

  it("Should get the count value", async () => {
    const response = await request(app).get("/api/retrieve");
    expect(response.body).toEqual(mock);
  });

  it("should update the count value", async () => {
    const response = await request(app)
      .put("/api/increment")
      .send(result);
    expect(response.body.count).toBe(2);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
});
