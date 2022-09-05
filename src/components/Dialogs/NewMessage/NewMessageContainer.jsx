import { connect } from 'react-redux';
import { addNewMessageAC, changeNewMessageAC } from '../../../redux/reducers/messages-reducer';
import NewMessage from './NewMessage';

const mapStateToProps = (state) => {
   return {
      textNewMessage : state.ADD_NEW_MESSAGE_REDUSER.textNewMessage
   }
};

const mapDispatchToProps = {
      addNewMessageAC,
      changeNewMessageAC
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
