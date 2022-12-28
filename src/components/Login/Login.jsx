import styles from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { ElemFormControl } from '../global/formControls/FormControls'
import { requreField, maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { loginTC } from '../../redux/reducers/auth-reducer'
import { Navigate } from 'react-router-dom'

const LoginForm = (props) => {
   const maxLength30 = maxLengthCreator(30);
   return (
      <form onSubmit={props.handleSubmit} className={styles.form}>
         <Field type="text" placeholder='Email' name='email' component={ElemFormControl} types="input" validate={[requreField]}/>
         <Field type="text" placeholder='Password' name='password' component={ElemFormControl} types="inputPassword" validate={[requreField, maxLength30]} />
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
      // console.log(formData)
      props.loginTC(formData.email, formData.password, formData.remebmerMe)
   }
   if(props.isAuth) {
      return <Navigate to='/profile' />
   }
   return (
      <div className={styles.login_wrap}>
         <h1 className={styles.title}>Login</h1>
         <LoginReduxFormContainer onSubmit={onSubmit} />
      </div>
   )
}

const mapStateToProps = (state) => {
   return ({
      isAuth : state.AUTH_REDUSER.isAuth
   })
}

export default connect(mapStateToProps, {loginTC})(Login);