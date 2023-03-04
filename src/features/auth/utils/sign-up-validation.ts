import { ZodError, z } from 'zod'

export const signUpValidation = (values: SignUpFormValues) => {
  const errors: { [key: string]: string } = {}

  try {
    SignUpValidation.parse(values)
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      error.issues.forEach(({ path, message }) => {
        errors[typeof path === 'string' ? path : String(path)] = message
      })
    }
  }

  return errors
}

export const SignUpValidation = z
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
