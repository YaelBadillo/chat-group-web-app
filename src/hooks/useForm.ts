import { useFormik, FormikValues } from 'formik'

import { useFetch } from './useFetch'

export const useForm = <T, D extends FormikValues>(initialValues: D) => {
  const formik = useFormik<D>({
    initialValues,
    onSubmit: () => {
      execute()
    },
  })

  const { execute, status, value, error } = useFetch<T, D>(
    'http://localhost:3000/auth/login',
    'post',
    formik.values
  )

  return { formik, execute, status, value, error }
}
