import { Request, Response } from "express";
import nodemailjet from "node-mailjet";

const mailjet = new nodemailjet({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.SECRET_KEY,
});

export const mailtoCreateSubAdmin = async (
  email: string,
  name: string,
  subject: string,
  content: any
) => {
  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "lalu.fintan@gmail.com",
          Name: "Laluprasath",
        },
        To: {
          Email: email,
          Name: name,
        },
        subject: subject,
        HTMLPart: content,
      },
    ],
  });
};
