import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setProfileUserAC } from "../../redux/reducers/profile-reducer";
import Preloader from "../global/Preloader/Preloader";


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
      let urlApiUsers = `https://social-network.samuraijs.com/api/1.0/profile/2`;
      axios
         .get(urlApiUsers)
         .then(response => {
            this.props.setProfileUserAC(response.data)
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

let ProfileConstainer = connect(mapStateToProps, mapDispatchToProps)(ProfileApiConstainer);

export default ProfileConstainer;