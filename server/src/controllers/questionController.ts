import { Request, Response } from "express";
import Question from "../models/questionModel";
import Category from "../models/categoryModel";

export const createQuestion = async (req: Request, res: Response) => {
  const { question, answers, category } = req.body;

  try {
    const getCategory = await Category.findOne({ category });
    const questions = await Question.create({
      question,
      answers,
      category: getCategory,
    });

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const bulkUploadQuestions = async (req: Request, res: Response) => {
  try {
    const questions = await Question.insertMany(req.body);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getQuestions = async (req: Request, res: Response) => {
  try {
    const count = await Question.countDocuments();

    const randomIndex = Math.floor(Math.random() * count);

    const questions = await Question.find().skip(randomIndex);

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getQuestionByCategory = async (req: Request, res: Response) => {
  const { categoryid } = req.params;
  try {
    // const count = await Question.countDocuments();
    // const randomIndex = Math.floor(Math.random() * count);
    // const questions = await Question.find({ category: categoryid })
    //   .limit(25)
    //   .skip(randomIndex);

    const questions = await Question.aggregate([{ $sample: { size: 25 } }]);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    if (question) {
      const update = await Question.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(update);
    } else {
      res.status(400).json("no question");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteQuestion = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);

    if (question) {
      const deletequestion = await Question.findByIdAndRemove(id, req.body);
      res.status(200).json("deleted successfully");
    } else {
      res.status(400).json("no question");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
