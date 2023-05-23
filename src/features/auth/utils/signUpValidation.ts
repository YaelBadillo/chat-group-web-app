import { z, ZodError } from 'zod'

import { SignUpFormEntries } from '../types'
import { getErrors } from './utils'

export const signUpValidation = (values: SignUpFormEntries) => {
  let errors: { [key: string]: string } = {}

  try {
    SignUpValidation.parse(values)
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      errors = getErrors(error)
    }
  }

  return errors
}

const SignUpValidation = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be more than 3 characters')
      .max(30, 'Name must be less than 30 characters'),
    password: z
      .string()
      .min(6, 'Password must be more than 6 characters')
      .max(40, 'Password must be less than 40 characters')
      .regex(
        new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
        'Password too weak'
      ),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm'],
  })
