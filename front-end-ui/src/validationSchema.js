import * as Yup from "yup"

export const validationRegisterSchema = Yup.object({
    username : Yup.string().min(2).required('Enter Your Username'),
    email : Yup.string().email().required('Enter Your Email'),
    password : Yup.string().min(8).required('Enter Your Password')
})

export const validationLoginSchema = Yup.object({
    email : Yup.string().email().required('Enter Your Email'),
    password : Yup.string().min(8).required('Enter Your Password')
})

export const validationCategorySchema = Yup.object({
    name : Yup.string().min(2).required('Enter the Category Name')
})