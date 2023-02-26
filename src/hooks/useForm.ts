import { useFormik, FormikValues } from 'formik'

import { useFetch } from './useFetch'

export const useForm = <D extends FormikValues, T = {}>(
  url: string,
  initialValues: D
) => {
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

  return { formik, status, value, error }
}
