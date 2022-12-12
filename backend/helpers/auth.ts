import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

import adminModel from "../models/admin.model";

const isEmail = (email: string) => {
  var emailFormat =
    /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email.match(emailFormat)) return true;
  return false;
};

export default {
  adminLogin: async (req: Request, res: Response) => {
    // Checking
    if (!req.body.email) return res.status(400).send("Email Not Provided");
    if (!req.body.password)
      return res.status(400).send("Password Not Provided");
    const { email, password } = req.body;
    if (!isEmail(email)) return res.status(400).send("Invalid Email");

    // Queriying Database
    await adminModel.findOne({ email: email }).then((data: any) => {
      if (!data) return res.status(400).send("email not found");

      bcrypt.compare(password, data.password, async (e, d) => {
        if (e)
          return res
            .status(400)
            .send("Some Error Occured (Bcrypt - SERVER ISSUE)");
        if (!d) res.status(400).send("Wrong Password");
        if (d) {
          let payload = {
            _id: data._id,
            email: data.email,
            name: data.name,
            phoneNo: data.phoneNo,
            avatar: data.avatar,
          };
          await jwt.sign(
            payload,
            jwtSecret,
            { expiresIn: 31556926 }, // One year
            (err, token) => {
              if (err) {
                res.status(400).send("Some Error Occured (JWT signing)");
                return console.log(err);
              }

              res.json({ success: true, token: `Bearer ${token}` });
            }
          );
        }
      });
    });
  },
};
