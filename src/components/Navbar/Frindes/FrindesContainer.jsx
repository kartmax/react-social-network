import { connect } from 'react-redux';
import Frindes from './Frindes';

const mapStateToProps = (state) => {
   return {
      state : state.SIDEBAR_REDUSER
   }
};

const FrindesContainer = connect(mapStateToProps)(Frindes);


export default FrindesContainer;