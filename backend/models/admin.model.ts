import { Schema, model } from "mongoose";

interface IStudent {
  name: string;
  email: string;
  password: string;
  phoneNo?: Number;
  dob: Date;
  dateOfJoining: Date;
  parentId: string;
  avatar: string;
}

const studentSchema = new Schema<IStudent>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNo: { type: Number, required: false },
    avatar: { type: String, default: "usericon.jpg" },
  },
  { timestamps: true }
);

export default model<IStudent>("admins", studentSchema, "admins");
