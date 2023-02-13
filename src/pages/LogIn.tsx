import {
  Button,
  Form,
  Input,
  TextSuggestion,
  TextSuggestionLink,
} from '../components/form'
import { useForm } from '../hooks'

const LogIn = () => {
  const { formik, execute, status, value, error } = useForm<{
    name: string
    password: string
  }>({ name: '', password: '' })

  return (
    <div className="grid h-full w-full content-center bg-secondary">
      <Form title="Welcome back" text="" handleSubmit={formik.handleSubmit}>
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

        <TextSuggestion>
          Don't have an account?{' '}
          <TextSuggestionLink to="/auth/signup">Sign up</TextSuggestionLink>
        </TextSuggestion>
      </Form>
    </div>
  )
}

export default LogIn
