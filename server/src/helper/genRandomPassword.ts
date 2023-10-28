import crypto from "crypto";

export const generatePassword = (length: number) => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const random = crypto.randomInt(0, charset.length);
    password += charset[random];
  }
  return password;
};
