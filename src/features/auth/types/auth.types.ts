import { FormikErrors, FormikTouched } from 'formik'

export interface UseAuthProperties<D> {
  url: string
  to: string
  initialValues: D
  withCredentials?: boolean
  validate?:
    | ((values: D) => void | object | Promise<FormikErrors<D>>)
    | undefined
  initialTouched?: FormikTouched<D> | undefined
}

export interface SignUpFormEntries {
  name: string
  password: string
  passwordConfirm: string
}

export interface LogInFormEntries {
  name: string
  password: string
}
