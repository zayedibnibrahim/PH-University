import express from 'express';
import { StudentControllers } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from './student.validation';

const route = express.Router();

route.get('/', StudentControllers.getAllStudents);
route.get('/:studentId', StudentControllers.getSingleStudent);
route.delete('/:studentId', StudentControllers.deleteSingleStudent);
route.patch(
  '/:studentId',
  validateRequest(studentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent,
);

export const StudentRoutes = route;
