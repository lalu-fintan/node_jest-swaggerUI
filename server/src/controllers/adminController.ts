import bcrypt from "bcrypt";
import { Request, Response } from "express";
import Admin from "../models/adminModel";
import { mailtoCreateSubAdmin } from "../helper/mailjet";
import { generatePassword } from "../helper/genRandomPassword";
import { subAdminAccountCreated } from "../html/subAdminTemp";

export const createSubAdmin = async (req: Request, res: Response) => {
  const client = req.body;

  try {
    const subAdmin = await Admin.findOne(client.email);
    console.log(subAdmin);
    if (subAdmin) {
      res.status(400).json("Email already exist");
    } else {
      client.password = generatePassword(10);

      await mailtoCreateSubAdmin(
        client.email,
        client.firstname,
        "SubAdmin Created",
        subAdminAccountCreated(client.email, client.password, client.firstname)
      );

      const hashpassword = await bcrypt.hash(client.password, 10);
      const account = await Admin.create({
        firstname: client.firstname,
        lastname: client.lastname,
        email: client.email,
        password: hashpassword,
        role: "subAdmin",
        organization: client.organization,
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
