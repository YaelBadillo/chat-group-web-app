import { ZodError } from 'zod'

export const getErrors = (error: ZodError) => {
  const errors: { [key: string]: string } = {}

  error.issues.forEach(({ path, message }) => {
    errors[typeof path === 'string' ? path : String(path)] = message
  })

  return errors
}
