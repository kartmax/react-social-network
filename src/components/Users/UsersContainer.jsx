import { connect } from "react-redux";
import { getUsersTC, changePageTC, onFollowTC } from "../../redux/reducers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../global/Preloader/Preloader";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
   return {
      users : state.USERS_REDUSER.users,
      pageSize: state.USERS_REDUSER.pageSize,
      totalUsersCount: state.USERS_REDUSER.totalUsersCount,
      currentPage: state.USERS_REDUSER.currentPage,
      isPreloader: state.USERS_REDUSER.isPreloader,
      isDisabledBtn: state.USERS_REDUSER.isDisabledBtn,
      isAuth: state.AUTH_REDUSER.isAuth
   };
};

const mapDispatchToProps = {
   getUsersTC,
   changePageTC,
   onFollowTC
};

class UsersApiContainer extends React.Component {
   componentDidMount () {
      this.props.getUsersTC(this.props.pageSize, this.props.currentPage);
   }

   onChangePage = (pageNumber) => {
      this.props.changePageTC(this.props.pageSize, pageNumber)
   }

   
   render() {
      if(!this.props.isAuth) return <Navigate to='/login' />
      return (
         <>
            { this.props.isPreloader ? <Preloader /> : null }    
            <Users 
               isDisabledBtn={this.props.isDisabledBtn}
               totalUsersCount={this.props.totalUsersCount} 
               pageSize={this.props.pageSize}
               onChangePage={this.onChangePage}
               currentPage={this.props.currentPage}
               users={this.props.users}
               onFollowTC={this.props.onFollowTC}
            />
         </>
      )
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);


export default UsersContainer;