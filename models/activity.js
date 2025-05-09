import mongoose,{model} from "mongoose";

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
});

export const Activity = mongoose.models.Activity || model("Activity", activitySchema);
