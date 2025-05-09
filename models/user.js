import mongoose, {model} from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});


export const User = mongoose.models.User || model("User", userSchema);