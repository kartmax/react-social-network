import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfileUserAC } from "../../redux/reducers/profile-reducer";
import Preloader from "../global/Preloader/Preloader";
import {
   // useLocation,
   // useNavigate,
   useParams,
} from "react-router-dom";
import { UserAPI } from '../api/api';


let mapStateToProps = (state) => {
 return {
   profile: state.ADD_NEW_POST_REDUSER.profile
 }
}

let mapDispatchToProps = {
   setProfileUserAC
}

class ProfileApiConstainer extends React.Component {
   componentDidMount () {
      let userId = this.props.router.params.userId;
      if(!userId) {
         userId = 2;
      }
      UserAPI.profileUser(userId).then(data => {
                              this.props.setProfileUserAC(data)
                           });
   }

   render () {
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
withRouter(ProfileApiConstainer);

let ProfileConstainer = connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileApiConstainer));

export default ProfileConstainer;