import { Button, Form, Input, TextError } from '../components/form'
import { Loading } from '../components/loading'
import {
  Alert,
  Description,
  FormContainer,
  SignUpFormEntries,
  TextSuggestion,
  TextSuggestionLink,
  Title,
  UseAuthProperties,
  signUpValidation,
} from '../features/auth'
import { useAuth } from '../features/auth'

const signUpFormValues: UseAuthProperties<SignUpFormEntries> = {
  url: 'http://localhost:3000/auth/signup',
  to: '/auth/login',
  initialValues: {
    name: '',
    password: '',
    passwordConfirm: '',
  },
  validate: signUpValidation,
  initialTouched: {
    name: false,
    password: false,
    passwordConfirm: false,
  },
}

const SignUp = () => {
  const { formik, value, status, error } =
    useAuth<SignUpFormEntries>(signUpFormValues)

  if (status === 'pending') return <Loading />

  return (
    <div className="grid h-full w-full content-center bg-secondary">
      <Alert message={error?.message} />

      <FormContainer>
        <Title>Create your account</Title>
        <Description>Join thousands of people around the world</Description>

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
          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
            value={formik.values.passwordConfirm}
            required={true}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            startIcon="enhanced_encryption"
            error={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
                ? true
                : false
            }
          />
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
            <TextError textError={formik.errors.passwordConfirm} />
          ) : (
            <></>
          )}
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
