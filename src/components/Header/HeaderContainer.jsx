import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserDataAC } from '../../redux/reducers/auth-reducer';
import { UserAPI } from '../api/api';

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
      UserAPI.authMe().then(data => {
                  if (data.resultCode === 0) {
                     let {id, email, login} = data.data;
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