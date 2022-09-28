import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileUserTC } from "../../redux/reducers/profile-reducer";
import Preloader from "../global/Preloader/Preloader";
import { WithRouterHOC } from "../../hoc/WithRouter";
import { WithAuthRedirectHOC } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
 return {
   profile: state.ADD_NEW_POST_REDUSER.profile,
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
      return (
         <>
            { this.props.profile != null ? <Profile profile={this.props.profile} /> : <Preloader />  }
         </>
      )
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   WithRouterHOC,
   WithAuthRedirectHOC
)(ProfileApiConstainer);