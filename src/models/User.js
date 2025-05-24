import { Schema, model } from "mongoose";
import { v4 as uuid } from "uuid";

const { String } = Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
  id: {
    type: String,
    default: uuid,
    require: true,
    unique: true,
  },
});
const User = model("User", userSchema);
export default User;
