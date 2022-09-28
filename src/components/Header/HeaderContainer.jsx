import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeTC } from '../../redux/reducers/auth-reducer';
import { compose } from 'redux';

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

export default compose (
   connect(mapStateToProps, mapDispatchToProps)
)(HeaderApiContainer)