import { Schema, model, ObjectId } from "mongoose";

interface IStudent {
  section: string;
  grade: Number;
  teacherId: ObjectId;
  timetable: object;
}

const studentSchema = new Schema<IStudent>(
  {
    section: { type: String, required: true },
    grade: { type: Number, required: true },
    teacherId: { type: String, required: true },
    timetable: { type: Object },
  },
  { timestamps: true }
);

export default model<IStudent>("classroom", studentSchema, "classroom");
