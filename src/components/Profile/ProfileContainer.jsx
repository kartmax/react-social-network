import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileUserTC, getStatusUserTC, updateStatusUserTC } from "../../redux/reducers/profile-reducer";
import Preloader from "../global/Preloader/Preloader";
import { WithRouterHOC } from "../../hoc/WithRouter";
import { WithAuthRedirectHOC } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
 return {
   profile: state.ADD_NEW_POST_REDUSER.profile,
   status: state.ADD_NEW_POST_REDUSER.status,
 }
}

let mapDispatchToProps = {
   getProfileUserTC, 
   getStatusUserTC,
   updateStatusUserTC
}

class ProfileApiConstainer extends React.Component {
   componentDidMount () {
      let userId = this.props.router.params.userId;
      if(!userId) {
         userId = 25783;
      }
      this.props.getProfileUserTC(userId);
      this.props.getStatusUserTC(userId);
   }
   
   render () {
      return (
         <>
            { this.props.profile != null ? <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusUserTC} /> : <Preloader />  }
         </>
      )
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   WithRouterHOC,
   WithAuthRedirectHOC
)(ProfileApiConstainer);