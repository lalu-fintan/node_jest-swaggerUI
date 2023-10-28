import Jwt from "jsonwebtoken";

export const generateRefreshToken = (id: string): string => {
  return Jwt.sign({ id }, process.env.SECRET_TOKEN as string, {
    expiresIn: "3d",
  });
};

export const generateAccessToken = (user: object): string => {
  return Jwt.sign({ user }, process.env.SECRET_TOKEN as string, {
    expiresIn: "1d",
  });
};
