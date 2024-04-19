import * as Yup from 'yup'

const userSchema = Yup.object().shape({
    email:Yup.string().email('Invalid email').required('email is required').matches(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,'Invalid email'),
    password:Yup.string().min(6,'must be atleast 6 charachters').required('password is required')
})


export default userSchema
