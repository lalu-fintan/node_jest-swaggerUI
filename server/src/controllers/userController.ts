import Jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userModel";
import { Request, Response } from "express";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../helper/refreshToken";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashPassword,
    });

    const refreshToken = generateRefreshToken(user.id);
    const updateUser = await User.findByIdAndUpdate(
      user.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    const accessToken = generateAccessToken(user);

    res.status(200).json({ updateUser, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const emailRegex = new RegExp(email, "i");
    const user = await User.findOne({ email: { $regex: emailRegex } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const refreshToken = generateRefreshToken(user.id);

      const updateUser = await User.findByIdAndUpdate(
        user.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000,
      });

      const accessToken = generateAccessToken(user);
      res.status(200).json({
        message: "login successfull",
        data: user,
        token: accessToken,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  const cookie = req.cookies;

  if (!cookie.refreshToken) {
    res.status(400).json("you don't have a token");
  }
  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });
    res.status(403);
  }
  await User.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    },
    { new: true }
  );
  res.clearCookie("refreshToken", { httpOnly: true, secure: true });
  res.status(200).json({ message: "logout successfully" });
};

export const getUser = async (req: Request, res: Response) => {
  const { _id } = req.user.user;
  try {
    const user = await User.findById(_id).select(
      "_id username firstname lastname email"
    );
    if (!user) {
      res.status(400).json("user not found");
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const { _id } = req.user.user;
  try {
    const user = await User.findById(_id);

    if (!user) {
      res.status(400).json("user not found");
    } else {
      const updateUser = await User.findByIdAndUpdate(_id, req.body, {
        new: true,
      });
      res.status(200).json("updated successfully");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
