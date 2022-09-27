import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

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
   const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)
   return ConnectAuthRedirectComponent;
}