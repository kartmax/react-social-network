import { connect } from 'react-redux';
import User from './User';

const mapStateToProps = (state) => {
   return {
      state : state.ADD_NEW_POST_REDUSER.mainUser
   }
};

const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;