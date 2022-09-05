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
      let urlApiUsers = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`;

      axios
         .get(urlApiUsers)
         .then(response => {
            this.props.setPreloaderAC(false);
            this.props.setUsersAC(response.data.items);
            this.props.setTotalUsersAC(response.data.totalCount);
         });
   }

   onChangePage = (pageNumber) => {
      this.props.setPreloaderAC(true);
      this.props.setCurrentPageAC(pageNumber)
      let urlApiUsers = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`;

      axios
         .get(urlApiUsers)
         .then(response => {
            this.props.setPreloaderAC(false);
            this.props.setUsersAC(response.data.items);
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