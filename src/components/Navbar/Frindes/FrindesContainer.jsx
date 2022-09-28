import { connect } from 'react-redux';
import Frindes from './Frindes';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      state : state.SIDEBAR_REDUSER
   }
};

export default compose (
   connect(mapStateToProps)
)(Frindes);