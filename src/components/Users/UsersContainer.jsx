import { connect } from "react-redux";
import { followAC, 
         setUsersAC, 
         unfollowAC, 
         setCurrentPageAC, 
         setTotalUsersAC, 
         setPreloaderAC } from "../../redux/reducers/users-reducer";
import React from "react";
import * as axios from 'axios';
import Users from "./Users";
import Preloader from "../global/Preloader/Preloader";
import { UserAPI } from "../api/api";

const mapStateToProps = (state) => {
   return {
      users : state.USERS_REDUSER.users,
      pageSize: state.USERS_REDUSER.pageSize,
      totalUsersCount: state.USERS_REDUSER.totalUsersCount,
      currentPage: state.USERS_REDUSER.currentPage,
      isPreloader: state.USERS_REDUSER.isPreloader
   };
};

const mapDispatchToProps = {
   followAC,
   unfollowAC,
   setUsersAC,
   setCurrentPageAC,
   setTotalUsersAC,
   setPreloaderAC,
};

class UsersApiContainer extends React.Component {
   componentDidMount () {
      this.props.setPreloaderAC(true);

      UserAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setPreloaderAC(false);
            this.props.setUsersAC(data.items);
            this.props.setTotalUsersAC(data.totalCount);
         });
   }

   onChangePage = (pageNumber) => {
      this.props.setPreloaderAC(true);
      this.props.setCurrentPageAC(pageNumber)

      UserAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
         this.props.setPreloaderAC(false);
         this.props.setUsersAC(data.items);
      });
   }

   render() {
      return (
         <>
            { this.props.isPreloader ? <Preloader /> : null }    
            <Users 
               followAC={this.props.followAC}
               unfollowAC={this.props.unfollowAC}
               totalUsersCount={this.props.totalUsersCount} 
               pageSize={this.props.pageSize}
               onChangePage={this.onChangePage}
               currentPage={this.props.currentPage}
               users={this.props.users}
            />
         </>
      )
   }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);


export default UsersContainer;