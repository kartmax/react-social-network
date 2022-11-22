import { connect } from 'react-redux';
import { addNewMessageAC } from '../../../redux/reducers/messages-reducer';
import NewMessage from './NewMessage';
import { compose } from 'redux';

const mapDispatchToProps = {
      addNewMessageAC
};

export default compose (
   connect('', mapDispatchToProps)
)(NewMessage);
