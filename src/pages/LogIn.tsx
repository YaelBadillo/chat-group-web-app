import { Button, Form, Input, TextError } from '../components/form'
import { Loading } from '../components/loading'
import {
  Description,
  FormContainer,
  Title,
  TextSuggestion,
  TextSuggestionLink,
  logInValidation,
} from '../features/auth'
import { useAuth } from '../hooks'

const logInFormValues = {
  url: 'http://localhost:3000/auth/login',
  to: '/dashboard',
  initialValues: {
    name: '',
    password: '',
  },
  withCredentials: true,
  initialTouched: {
    name: false,
    password: false,
  },
}

const LogIn = () => {
  const { formik, status, error } = useAuth<LogInFormEntries>({
    url: logInFormValues.url,
    to: logInFormValues.to,
    initialValues: logInFormValues.initialValues,
    withCredentials: logInFormValues.withCredentials,
    validate: logInValidation,
    initialTouched: logInFormValues.initialTouched,
  })

  if (status === 'pending') return <Loading />

  return (
    <div className="grid h-full w-full content-center bg-secondary">
      <FormContainer>
        <Title>Welcome back</Title>
        <Description> </Description>

        <Form handleSubmit={formik.handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            required={true}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            startIcon="badge"
            error={formik.touched.name && formik.errors.name ? true : false}
          />
          {formik.touched.name && formik.errors.name ? (
            <TextError textError={formik.errors.name} />
          ) : (
            <></>
          )}
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            required={true}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            startIcon="lock"
            error={
              formik.touched.password && formik.errors.password ? true : false
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <TextError textError={formik.errors.password} />
          ) : (
            <></>
          )}
          <Button content="Continue" />
        </Form>

        <TextSuggestion>
          Don't have an account?{' '}
          <TextSuggestionLink to="/auth/signup">Sign up</TextSuggestionLink>
        </TextSuggestion>
      </FormContainer>
    </div>
  )
}

export default LogIn
