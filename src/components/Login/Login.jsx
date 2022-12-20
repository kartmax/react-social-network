import styles from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../global/formControls/FormControls'
import { requreField, maxLengthCreator } from '../../utils/validators/validators'

const LoginForm = (props) => {
   const maxLength10 = maxLengthCreator(10);
   return (
      <form onSubmit={props.handleSubmit} className={styles.form}>
         <Field type="text" placeholder='Login' name='login' component={Input} validate={[requreField]} />
         <Field type="text" placeholder='Password' name='password' component={Input} validate={[requreField, maxLength10]} />
         <div className={styles.wrapCheckbox}>
            <Field className={`${styles.field} checkbox`} id="remebmerMe" type="checkbox" name='remebmerMe' component='input' />
            <label htmlFor='remebmerMe'>remember me</label>
         </div>
         <button className={`main_btn ${styles.loginButton}`}>Login</button>
      </form>
   )
}

const LoginReduxFormContainer = reduxForm({
   form: 'login'
 })(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return (
      <div className={styles.login_wrap}>
         <h1 className={styles.title}>Login</h1>
         <LoginReduxFormContainer onSubmit={onSubmit} />
      </div>
   )
}

export default Login;