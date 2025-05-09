import express from 'express'
import { register, login,logout } from '../controllers/authController.js';
import { registerValidation, loginValidation } from '../validators/auth.js';
import { validationResult } from 'express-validator';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', registerValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, register);

router.post('/login', loginValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, login);

router.use(auth);
router.post('/logout',logout);

export default router