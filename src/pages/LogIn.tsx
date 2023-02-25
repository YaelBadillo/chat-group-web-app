import { useEffect } from 'react'

import { Button, Form, Input } from '../components/form'
import {
  Description,
  FormContainer,
  Title,
  TextSuggestion,
  TextSuggestionLink,
} from '../features/auth'
import { useForm } from '../hooks'

const LogIn = () => {
  const { formik, execute, status, value, error } = useForm<
    any,
    {
      name: string
      password: string
    }
  >({ name: '', password: '' }, 'http://localhost:3000/auth/login')

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
