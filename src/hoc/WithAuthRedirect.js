import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToPropsForRedirect = (state) => {
   return {
      isAuth: state.AUTH_REDUSER.isAuth
   }
}

export const WithAuthRedirectHOC = (Component) => {
   const AuthRedirectComponent = (props) => {
      if(!props.isAuth) return <Navigate to='/login' />
      return <Component {...props} />
   }

   return compose(
      connect(mapStateToPropsForRedirect)
   )(AuthRedirectComponent)
}