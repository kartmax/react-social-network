import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserDataAC } from '../../redux/reducers/auth-reducer';

const mapStateToProps = (state) => {
   return {
      isAuth: state.AUTH_REDUSER.isAuth,
      login: state.AUTH_REDUSER.login,
      id: state.AUTH_REDUSER.id
   }
}
const mapDispatchToProps = {
   setAuthUserDataAC
}

class HeaderApiContainer extends React.Component {
   componentDidMount () {
      let url = 'https://social-network.samuraijs.com/api/1.0/auth/me';
      axios
         .get(url, { withCredentials: true })
         .then(response => {
            if (response.data.resultCode === 0) {
               let {id, email, login} = response.data.data;
               this.props.setAuthUserDataAC(id, email, login);
            }
         })
   }
   render () {
      return (
         <Header {...this.props} />
      )
   }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiContainer);

export default HeaderContainer;