import { useFormik, FormikValues, FormikErrors, FormikTouched } from 'formik'

import { useFetch } from './useFetch'

interface UseFormProperties<D> {
  url: string
  initialValues: D
  withCredentials?: boolean
  validate?:
    | ((values: D) => void | object | Promise<FormikErrors<D>>)
    | undefined
  initialTouched?: FormikTouched<D> | undefined
}

export const useForm = <D extends FormikValues, T = {}>({
  url,
  initialValues,
  withCredentials = false,
  validate = undefined,
  initialTouched = undefined,
}: UseFormProperties<D>) => {
  const formik = useFormik<D>({
    initialValues,
    onSubmit: () => {
      execute()
    },
    validate,
    initialTouched,
  })

  const { execute, status, value, error } = useFetch<T, D>(
    url,
    'post',
    formik.values,
    withCredentials
  )

  return { formik, status, value, error }
}
