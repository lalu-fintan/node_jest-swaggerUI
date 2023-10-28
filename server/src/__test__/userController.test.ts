import request from "supertest";
import app from "../index";

//  yarn test --watchAll
//   yarn test --detectOpenHandles

export let token: string | undefined;
let refreshToken: string;

beforeAll(async () => {
  const userData = {
    email: "Lalu.fintan12@gmail.com",
    password: "12345678",
  };
  const res = await request(app)
    .post("/api/user/login")
    .send(userData)
    .expect(200)
    .then((response) => {
      expect(response.body).toHaveProperty("data");
      expect(response.body).toHaveProperty("token");
      token = response.body.token;
      refreshToken = response.headers["set-cookie"];
    });
});

test("test something", () => {
  console.log({ token });
});

// get user

describe("get user", () => {
  it("should get user", async () => {
    if (!token) {
      console.error("authentication token not avilable");
      return;
    }

    const res = await request(app)
      .get("/api/user/getUser")
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty("_id");
        expect(response.body).toHaveProperty("username");
        expect(response.body).toHaveProperty("firstname");
        expect(response.body).toHaveProperty("lastname");
        expect(response.body).toHaveProperty("email");
      });
  });
});

// update user

describe("update user", () => {
  const updateData = {
    firstname: "lalu",
    lastname: "prasath",
  };

  it("update user", async () => {
    if (!token) {
      console.error("authentication token not avilable");
      return;
    }

    const res = await request(app)
      .put("/api/user/updateUser")
      .send(updateData)
      .set("Authorization", `Bearer ${token}`)
      .expect(200)
      .then((res) => {
        expect(res.body).toBe("updated successfully");
      });
  });
});

// logout
// describe("logout user", () => {
//   it("should logout api", async () => {
//     if (!token) {
//       console.error("authentication token not avilable");
//       return;
//     }
//     const res = await request(app)
//       .get("/api/user/logout")
//       .set("Cookie", refreshToken)
//       .expect(200)
//       .then((res) => {
//         expect(res.body).toHaveProperty("message");
//       });
//   });
// });
