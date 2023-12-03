import express from 'express';
import { StudentController } from './student.controller';

const route = express.Router();

route.get('/', StudentController.getAllStudents);
route.get('/:studentId', StudentController.getSingleStudent);
route.delete('/:studentId', StudentController.deleteSingleStudent);

export const StudentRoutes = route;
