import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must string',
    })
    .max(20, { message: 'password cant be more than 20 character' })
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
