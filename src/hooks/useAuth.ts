import { useEffect } from 'react'

import { FormikValues } from 'formik'
import { useNavigate } from 'react-router-dom'

import { useForm } from './useForm'

export const useAuth = <D extends FormikValues, T = {}>(
  url: string,
  to: string,
  initialValues: D
) => {
  const { formik, status, value, error } = useForm<D, T>(url, initialValues)

  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success' && value !== null) {
      navigate(to)
    }
  }, [status])

  return { formik, status, value, error }
}

