import express from 'express';
import { UserController } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { studentValidation } from '../student/student.validation';

const route = express.Router();

route.post(
  '/create-student',
  validateRequest(studentValidation.CreateStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = route;
