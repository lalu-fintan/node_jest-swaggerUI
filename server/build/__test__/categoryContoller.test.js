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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const userController_test_1 = require("./userController.test");
// create category
describe("category", () => {
    it("should create new category", () => __awaiter(void 0, void 0, void 0, function* () {
        const newData = {
            category: "category1",
            description: "lorem123",
        };
        const res = yield (0, supertest_1.default)(index_1.default)
            .post("/api/category/")
            .send(newData)
            .set("Authorization", `Bearer ${userController_test_1.token}`)
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
    }));
});
// get the categories
describe("category", () => {
    it("get all categories", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default)
            .get("/api/category/")
            .set("Authorization", `Barear ${userController_test_1.token}`)
            .expect(200)
            .then((res) => {
            expect(Array.isArray(res.body)).toBe(true);
        });
    }));
});
describe("category", () => {
    let _id = "6538c48a777b2e33efa8a0ba";
    const update = {
        category: "Oliver",
    };
    it("should update the category", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(index_1.default)
            .put(`/api/category/${_id}`)
            .send(update)
            .set("Authorization", `Barear ${userController_test_1.token}`)
            .then((res) => {
            expect(res.body).toBe("updated successfully");
        });
    }));
});
//# sourceMappingURL=categoryContoller.test.js.map