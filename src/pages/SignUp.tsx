import { useForm } from '../hooks'

import { Button, Form, Input } from '../components/form'
import {
  Description,
  FormContainer,
  TextSuggestion,
  TextSuggestionLink,
  Title,
} from '../features/auth'

const SignUp = () => {
  const { formik, execute, status, value, error } = useForm<{
    name: string
    password: string
    passwordConfirm: string
  }>({ name: '', password: '', passwordConfirm: '' })

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
