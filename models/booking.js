import mongoose,{model} from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  activity: { type: mongoose.Schema.Types.ObjectId, ref: 'Activity' },
  bookedAt: { type: Date, default: Date.now }
});

export const Booking = mongoose.models.Booking || model("Booking", bookingSchema);
