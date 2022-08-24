import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    name:yup.string().required('Enter Your Name'),
    emailId:yup.string().email().required('Enter Valid Email'),
    password:yup.mixed().min(6).required()
});

export const loginSchema = yup.object().shape({
    emailId:yup.string().email().required('Enter valid Email'),
    password:yup.string().mixed().required()
});