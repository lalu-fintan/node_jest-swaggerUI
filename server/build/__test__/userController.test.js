"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
let refreshToken;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {
        email: "Lalu.fintan12@gmail.com",
        password: "12345678",
    };
    const res = yield (0, supertest_1.default)(index_1.default)
        .post("/api/user/login")
        .send(userData)
        .expect(200)
        .then((response) => {
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("token");
        exports.token = response.body.token;
        refreshToken = response.headers["set-cookie"];
    });
}));
test("test something", () => {
    console.log({ token: exports.token });
});
// get user
describe("get user", () => {
    it("should get user", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!exports.token) {
            console.error("authentication token not avilable");
            return;
        }
        const res = yield (0, supertest_1.default)(index_1.default)
            .get("/api/user/getUser")
            .set("Authorization", `Bearer ${exports.token}`)
            .expect(200)
            .then((response) => {
            expect(response.body).toHaveProperty("_id");
            expect(response.body).toHaveProperty("username");
            expect(response.body).toHaveProperty("firstname");
            expect(response.body).toHaveProperty("lastname");
            expect(response.body).toHaveProperty("email");
        });
    }));
});
// update user
describe("update user", () => {
    const updateData = {
        firstname: "lalu",
        lastname: "prasath",
    };
    it("update user", () => __awaiter(void 0, void 0, void 0, function* () {
        if (!exports.token) {
            console.error("authentication token not avilable");
            return;
        }
        const res = yield (0, supertest_1.default)(index_1.default)
            .put("/api/user/updateUser")
            .send(updateData)
            .set("Authorization", `Bearer ${exports.token}`)
            .expect(200)
            .then((res) => {
            expect(res.body).toBe("updated successfully");
        });
    }));
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
//# sourceMappingURL=userController.test.js.map