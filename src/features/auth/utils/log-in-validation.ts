import { z, ZodError } from 'zod'

import { LogInFormEntries } from '../interfaces'
import { getErrors } from './utils'

export const logInValidation = (values: LogInFormEntries) => {
  let errors: { [key: string]: string } = {}

  try {
    LogInValidation.parse(values)
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      errors = getErrors(error)
    }
  }

  return errors
}

const LogInValidation = z.object({
  name: z
    .string()
    .min(3, 'Name must be more than 3 characters')
    .max(30, 'Name must be less than 30 characters'),
  password: z.string(),
})
