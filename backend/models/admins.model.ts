import mongoose, { Schema, Document } from "mongoose";

export interface IAdmin extends Document {
  email: string;
  name: string;
  role: string;
  phone_no: string;
}

const AdminSchema: Schema = new Schema({
  email: {
    type: String,
    },
    name: {
        type: String,
    },
    role: {
        type:String,
    }
    phone_no: {
        type: Int16Array,
    }
});

export default mongoose.model<IAdmin>("Admin", AdminSchema);
