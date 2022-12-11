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
  adminLogin: (req: Request, res: Response) => {
    // Checking
    if (!req.body.email) return res.send("Email Not Provided");
    if (!req.body.password) return res.send("Password Not Provided");
    const { email, password } = req.body;
    if (!isEmail(email)) return res.send("Invalid Email");

    // Queriying Database
    adminModel.findOne({ email: email }).then((data: any) => {
      if (!data) return res.send("email not found");

      bcrypt.compare(password, data.password, (e, d) => {
        if (e) return res.send("Some Error Occured");
        if (!d) res.send("Wrong Password");
        if (d) {
          let payload = {
            _id: data._id,
            email: data.email,
            name: data.name,
            phoneNo: data.phoneNo,
            avatar: data.avatar,
          };
          jwt.sign(
            payload,
            jwtSecret,
            { expiresIn: 31556926 },
            (err, token) => {
              if (err) {
                res.send("Some Error Occured");
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
