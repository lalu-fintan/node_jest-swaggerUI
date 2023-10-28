import { Request, Response } from "express";
import Category from "../models/categoryModel";

export const createCategory = async (req: Request, res: Response) => {
  const { category, description } = req.body;
  try {
    const newCategory = await Category.create({ category, description });
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (category) {
      const updatedOne = await Category.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json("updated successfully");
    } else {
      res.status(400).json("category is not available");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (category) {
      const deletedOne = await Category.findByIdAndRemove(id, req.body);
      res.status(200).json("deleted successfully");
    } else {
      res.status(400).json("category is not available");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
