import { connect } from 'react-redux';
import { addNewMessageCreateAction, changeNewMessageCreateAction } from '../../../redux/messages-reduser';
import NewMessage from './NewMessage';

const mapStateToProps = (state) => {
   return {
      textNewMessage : state.ADD_NEW_MESSAGE_REDUSER.textNewMessage
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addNewMessage : () => {
         dispatch(addNewMessageCreateAction());
      },
      changeNewMessage : (text) => {
         dispatch(changeNewMessageCreateAction(text));
      }
   }
};

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
