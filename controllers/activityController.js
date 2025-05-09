import {Activity} from '../models/activity.js';

const listActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
};

export {listActivities}