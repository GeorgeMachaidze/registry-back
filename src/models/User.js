import { Schema, model } from "mongoose";

const { String, Number } = Schema.Types;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: true,
  },
});
const User = model("User", userSchema);
export default User;
