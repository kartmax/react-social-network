import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileUserTC } from "../../redux/reducers/profile-reducer";
import Preloader from "../global/Preloader/Preloader";
import {
   // useLocation,
   // useNavigate,
   useParams,

   Navigate
} from "react-router-dom";


let mapStateToProps = (state) => {
 return {
   profile: state.ADD_NEW_POST_REDUSER.profile,
   isAuth: state.AUTH_REDUSER.isAuth
 }
}

let mapDispatchToProps = {getProfileUserTC}

class ProfileApiConstainer extends React.Component {
   componentDidMount () {
      let userId = this.props.router.params.userId;
      if(!userId) {
         userId = 2;
      }
      this.props.getProfileUserTC(userId);
   }
   
   render () {
      if(!this.props.isAuth) return <Navigate to='/login' />
      return (
         <>
            { this.props.profile != null ? <Profile profile={this.props.profile} /> : <Preloader />  }
         </>
      )
   }
}

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      //  let location = useLocation();
      //  let navigate = useNavigate();
       let params = useParams();
       return (
           <Component
               {...props}
               // router={{ location, navigate, params }}
               router={{ params }}
           />
       );
   }
   return ComponentWithRouterProp;
}

let ProfileConstainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileApiConstainer));

export default ProfileConstainer;