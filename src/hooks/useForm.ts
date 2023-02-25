import { useFormik, FormikValues } from 'formik'

import { useFetch } from './useFetch'

export const useForm = <T, D extends FormikValues>(initialValues: D, url: string) => {
  const formik = useFormik<D>({
    initialValues,
    onSubmit: () => {
      execute()
    },
  })

  const { execute, status, value, error } = useFetch<T, D>(
    url,
    'post',
    formik.values
  )

  return { formik, execute, status, value, error }
}
