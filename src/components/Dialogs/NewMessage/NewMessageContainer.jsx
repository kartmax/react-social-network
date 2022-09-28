import { connect } from 'react-redux';
import { addNewMessageAC, changeNewMessageAC } from '../../../redux/reducers/messages-reducer';
import NewMessage from './NewMessage';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      textNewMessage : state.ADD_NEW_MESSAGE_REDUSER.textNewMessage
   }
};

const mapDispatchToProps = {
      addNewMessageAC,
      changeNewMessageAC
};

export default compose (
   connect(mapStateToProps, mapDispatchToProps)
)(NewMessage);
