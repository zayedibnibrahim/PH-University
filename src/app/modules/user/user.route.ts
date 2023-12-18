import express from 'express';
import { UserController } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from '../student/student.validation';

const route = express.Router();

route.post(
  '/create-student',
  validateRequest(studentValidations.CreateStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = route;
