import request from "supertest";
import app from "../index";
import { token } from "./userController.test";

// create category

describe("category", () => {
  it("should create new category", async () => {
    const newData = {
      category: "category1",
      description: "lorem123",
    };
    const res = await request(app)
      .post("/api/category/")
      .send(newData)
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty("_id");
        expect(res.body).toHaveProperty("category");
        expect(res.body).toHaveProperty("description");
        // expect(res.body).toEqual({
        //   _id: expect.any(String),
        //   category: expect.any(String),
        //   description: expect.any(String),
        // });
      });
  });
});

// get the categories

describe("category", () => {
  it("get all categories", async () => {
    const res = await request(app)
      .get("/api/category/")
      .set("Authorization", `Barear ${token}`)
      .expect(200)
      .then((res: any) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });
});

describe("category", () => {
  let _id = "6538c48a777b2e33efa8a0ba";
  const update = {
    category: "Oliver",
  };
  it("should update the category", async () => {
    const res = await request(app)
      .put(`/api/category/${_id}`)
      .send(update)
      .set("Authorization", `Barear ${token}`)
      .then((res) => {
        expect(res.body).toBe("updated successfully");
      });
  });
});
