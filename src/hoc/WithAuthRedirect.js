import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { authMeTC } from "../redux/reducers/auth-reducer";
import { compose } from "redux";

const mapStateToPropsForRedirect = (state) => {
   return {
      isAuth: state.AUTH_REDUSER.isAuth
   }
}
const mapDispatchToPropsForRedirect = {
   authMeTC
}

export const WithAuthRedirectHOC = (Component) => {
   const isAuthUser = async (props) => {
      await props.authMeTC()
      if(!props.isAuth) return <Navigate to='/login' />
    }
    isAuthUser();

   const AuthRedirectComponent = (props) => {
      return <Component {...props} />
   }

   return compose(
      connect(mapStateToPropsForRedirect, mapDispatchToPropsForRedirect)
   )(AuthRedirectComponent)
}