import {
  Input,
  Button,
  Form,
  TextSuggestion,
  TextSuggestionLink,
} from '../features/auth/components/form'
import { useForm } from '../hooks'

const SignUp = () => {
  const { formik, execute, status, value, error } = useForm<{
    name: string
    password: string
    passwordConfirm: string
  }>({ name: '', password: '', passwordConfirm: '' })

  return (
    <div className="grid h-full w-full content-center bg-secondary">
      <Form
        title="Create your account"
        text="Join thousands of people around the world"
        handleSubmit={formik.handleSubmit}
      >
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

        <TextSuggestion>
          Already have an account?{' '}
          <TextSuggestionLink to="/auth/login">Log in</TextSuggestionLink>
        </TextSuggestion>
      </Form>
    </div>
  )
}

export default SignUp
