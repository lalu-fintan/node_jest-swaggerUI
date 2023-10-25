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
exports.deleteCategory = exports.updateCategory = exports.getCategory = exports.createCategory = void 0;
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, description } = req.body;
    try {
        const newCategory = yield categoryModel_1.default.create({ category, description });
        res.status(200).json(newCategory);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createCategory = createCategory;
const getCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield categoryModel_1.default.find();
        res.status(200).json(category);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getCategory = getCategory;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield categoryModel_1.default.findById(id);
        if (category) {
            const updatedOne = yield categoryModel_1.default.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(updatedOne);
        }
        else {
            res.status(400).json("category is not available");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const category = yield categoryModel_1.default.findById(id);
        if (category) {
            const deletedOne = yield categoryModel_1.default.findByIdAndRemove(id, req.body);
            res.status(200).json("deleted successfully");
        }
        else {
            res.status(400).json("category is not available");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=categoryController.js.map