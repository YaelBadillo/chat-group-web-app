import { useEffect } from 'react'

import { FormikValues } from 'formik'
import { useNavigate } from 'react-router-dom'

import { useForm } from '../../../hooks'
import { UseAuthProperties } from '../auth'

export const useAuth = <D extends FormikValues, T = {}>({
  url,
  to,
  initialValues,
  withCredentials = false,
  validate = undefined,
  initialTouched = undefined,
}: UseAuthProperties<D>) => {
  const { formik, status, value, error } = useForm<D, T>({
    url,
    initialValues,
    withCredentials,
    validate,
    initialTouched,
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success' && value !== null) {
      navigate(to)
    }
  }, [status])

  return { formik, status, value, error }
}
