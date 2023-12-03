import { UpdateWriteOpResult } from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudentFromDB = async (): Promise<TStudent[]> => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string): Promise<TStudent | null> => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteSingleStudentFromDB = async (
  id: string,
): Promise<UpdateWriteOpResult> => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentService = {
  getAllStudentFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
