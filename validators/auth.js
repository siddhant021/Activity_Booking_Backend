import { body } from 'express-validator';

const registerValidation = [
  body('name').notEmpty(),
  body('email').isEmail(),
  body('phone').notEmpty(),
  body('password').isLength({ min: 6 }),
];

const loginValidation = [
  body('email').isEmail(),
  body('password').notEmpty(),
];



export {registerValidation,loginValidation}