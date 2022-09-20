import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeTC } from '../../redux/reducers/auth-reducer';

const mapStateToProps = (state) => {
   return {
      isAuth: state.AUTH_REDUSER.isAuth,
      login: state.AUTH_REDUSER.login,
      id: state.AUTH_REDUSER.id
   }
}
const mapDispatchToProps = {
   authMeTC
}

class HeaderApiContainer extends React.Component {
   componentDidMount () {
      this.props.authMeTC();
   }
   render () {
      return (
         <Header {...this.props} />
      )
   }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderApiContainer);

export default HeaderContainer;