import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(3, 'Password must be at least 4 characters').max(20).required('Password is required')
})

export const registerSchema = Yup.object().shape({
  fullname: Yup.string().required('Full name is required'),
  username: Yup.string().required('Username is required'),
  password: Yup.string().min(4, 'Password must be at least 4 characters').max(20).required('Password is required'),
  repassword: Yup.string()
    .required('Repassword is required')
    .oneOf([Yup.ref('password')], 'Passwords must match')
})
