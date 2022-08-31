import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(6).required(),
    name:yup.string().min(2).required()
});

export const loginSchema = yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().min(6).required()
});