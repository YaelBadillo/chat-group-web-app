import { Button, Form, Input } from '../components/form'
import { Loading } from '../components/loading'
import {
  Description,
  FormContainer,
  TextSuggestion,
  TextSuggestionLink,
  Title,
} from '../features/auth'
import { useAuth } from '../hooks'

interface SignUpInitialValues {
  name: string
  password: string
  passwordConfirm: string
}

const signUpFormValues = {
  url: 'http://localhost:3000/auth/signup',
  to: '/auth/login',
  initialValues: {
    name: '',
    password: '',
    passwordConfirm: '',
  },
}

const SignUp = () => {
  const { formik, value, status, error } = useAuth<SignUpInitialValues>(
    signUpFormValues.url,
    signUpFormValues.to,
    signUpFormValues.initialValues
  )

  if (status === 'pending') return <Loading />

  return (
    <div className="grid h-full w-full content-center bg-secondary">
      <FormContainer>
        <Title>Create your account</Title>
        <Description>Join thousands of people around the world</Description>

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
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            value={formik.values.passwordConfirm}
            onChange={formik.handleChange}
            startIcon="enhanced_encryption"
          />
          <Button content="Continue" />
        </Form>

        <TextSuggestion>
          Already have an account?{' '}
          <TextSuggestionLink to="/auth/login">Log in</TextSuggestionLink>
        </TextSuggestion>
      </FormContainer>
    </div>
  )
}

export default SignUp
