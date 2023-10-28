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
exports.deleteQuestion = exports.updateQuestion = exports.getQuestionByCategory = exports.getQuestions = exports.bulkUploadQuestions = exports.createQuestion = void 0;
const questionModel_1 = __importDefault(require("../models/questionModel"));
const categoryModel_1 = __importDefault(require("../models/categoryModel"));
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { question, answers, category } = req.body;
    try {
        const getCategory = yield categoryModel_1.default.findOne({ category });
        const questions = yield questionModel_1.default.create({
            question,
            answers,
            category: getCategory,
        });
        res.status(200).json(questions);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createQuestion = createQuestion;
const bulkUploadQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield questionModel_1.default.insertMany(req.body);
        res.status(200).json(questions);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.bulkUploadQuestions = bulkUploadQuestions;
const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield questionModel_1.default.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const questions = yield questionModel_1.default.find().skip(randomIndex);
        res.status(200).json(questions);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getQuestions = getQuestions;
const getQuestionByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryid } = req.params;
    try {
        // const count = await Question.countDocuments();
        // const randomIndex = Math.floor(Math.random() * count);
        // const questions = await Question.find({ category: categoryid })
        //   .limit(25)
        //   .skip(randomIndex);
        const questions = yield questionModel_1.default.aggregate([{ $sample: { size: 25 } }]);
        res.status(200).json(questions);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getQuestionByCategory = getQuestionByCategory;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const question = yield questionModel_1.default.findById(id);
        if (question) {
            const update = yield questionModel_1.default.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.status(200).json(update);
        }
        else {
            res.status(400).json("no question");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const question = yield questionModel_1.default.findById(id);
        if (question) {
            const deletequestion = yield questionModel_1.default.findByIdAndRemove(id, req.body);
            res.status(200).json("deleted successfully");
        }
        else {
            res.status(400).json("no question");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteQuestion = deleteQuestion;
//# sourceMappingURL=questionController.js.map