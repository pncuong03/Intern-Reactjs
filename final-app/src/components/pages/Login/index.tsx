import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { loginSchema } from '~/utilities/common/validator'
import { useLogin } from '~/utilities/hooks/useLogin'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
  const { onLogin } = useLogin()
  const onSubmit = async (values: { username: string; password: string }) => {
    await onLogin(values.username, values.password)
  }

  return (
    <div className='flex h-screen p-2 items-center justify-center bg-gray-100 '>
      <div className='max-w-md w-full bg-white p-8 rounded-2xl shadow-md'>
        <div className='mb-8 text-center'>
          <img src='./img/fb-icon.png' alt='Facebook' className='mx-auto w-32' />
        </div>
        <Formik initialValues={{ username: '', password: '' }} validationSchema={loginSchema} onSubmit={onSubmit}>
          {({}) => (
            <Form className='space-y-6'>
              <div>
                <Field
                  type='text'
                  name='username'
                  placeholder='Username'
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                />
                <ErrorMessage name='username' component='div' className='text-red-500 text-sm mt-1' />
              </div>
              <div>
                <Field
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
                />
                <ErrorMessage name='password' component='div' className='text-red-500 text-sm mt-1' />
              </div>
              <div>
                <button
                  type='submit'
                  className='w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600'
                >
                  Log In
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className='mt-4 text-center'>
          <a href='#' className='text-blue-600 hover:underline'>
            Forgotten password?
          </a>
        </div>
        <hr className='my-6 border-gray-300' />
        <div className='text-center'>
          <Link
            to='/register'
            className='block w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 text-center'
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
