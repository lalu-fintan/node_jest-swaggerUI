import Jwt, { Secret } from "jsonwebtoken";

export const generateRefreshToken = (id: string): string => {
  return Jwt.sign({ id }, process.env.SECRET_TOKEN || "", {
    expiresIn: "3d",
  });
};

export const generateAccessToken = (user: object): string => {
  return Jwt.sign({ user }, process.env.SECRET_TOKEN || "", {
    expiresIn: "1d",
  });
};
