import Admin from "../models/adminModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateAccessToken } from "../helper/refreshToken";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const emailRegex = new RegExp(email, "i");
    const user = await Admin.findOne({ email: { $regex: emailRegex } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = generateAccessToken(user);
      res.status(200).json({
        message: "login successfull",
        token: accessToken,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
