import { Button, Form, Input } from '../components/form'
import { Loading } from '../components/loading'
import {
  Description,
  FormContainer,
  Title,
  TextSuggestion,
  TextSuggestionLink,
} from '../features/auth'
import { useAuth } from '../hooks'

interface LogInInitialValues {
  name: string
  password: string
}

const logInFormValues = {
  url: 'http://localhost:3000/auth/login',
  to: '/dashboard',
  initialValues: {
    name: '',
    password: '',
  },
  withCredentials: true,
}

const LogIn = () => {
  const { formik, status, error } = useAuth<LogInInitialValues>(
    logInFormValues.url,
    logInFormValues.to,
    logInFormValues.initialValues,
    logInFormValues.withCredentials
  )

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
            onChange={formik.handleChange}
            startIcon="badge"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            startIcon="lock"
          />
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
