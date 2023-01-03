import { useFormik } from 'formik'

import { Input, Button, Form, TextSuggestionLink } from '../components/form'
import { TextSuggestion } from '../components/form/TextSuggestion';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (values) => console.log(values),
  })

  return (
    <div className="grid h-full w-full content-center bg-secondary">
      <Form>
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
          <TextSuggestionLink>
            Log in 
          </TextSuggestionLink>
        </TextSuggestion>
      </Form>
    </div>
  )
}

export default SignUp
