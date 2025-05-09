import express from 'express'
import { bookActivity, getMyBookings} from '../controllers/bookingController.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.use(auth)

router.post('/', auth, bookActivity);
router.get('/me', auth, getMyBookings);

export default router