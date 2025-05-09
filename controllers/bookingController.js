import {Booking} from '../models/booking.js';
import {Activity} from '../models/activity.js';

const bookActivity = async (req, res) => {
  const { activityId } = req.body;
  const activity = await Activity.findById(activityId);
  if (!activity) return res.status(404).json({ message: 'Activity not found' });
  const alreadyBooked = await Booking.findOne({
    user: req.user.id,
    activity: activityId
  });
  if (alreadyBooked) {
    return res.status(400).json({ message: 'You have already booked this activity' });
  }
  const booking = await Booking.create({ user: req.user.id, activity: activityId });
  res.status(201).json(booking);
};

const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate('activity');
  res.json(bookings);
};

export {bookActivity,getMyBookings}