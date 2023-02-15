import { useFormik, FormikValues } from 'formik'

import { useFetch } from './useFetch'

export const useForm = <T extends FormikValues>(initialValues: T) => {
  const formik = useFormik<T>({
    initialValues,
    onSubmit: () => {
      execute()
    },
  })

  const { execute, status, value, error } = useFetch<T>('/auth/login', {
    baseURL: 'http://localhost:3000',
    method: 'post',
    data: formik.values,
  })

  return { formik, execute, status, value, error }
}
