import {addNewMessageCreateAction, changeNewMessageCreateAction} from '../../../redux/messages-reduser';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {

   let textNewMessage = props.store.getState().ADD_NEW_MESSAGE_REDUSER.textNewMessage;

   const addNewMessage = () => {
      props.store.dispatch(addNewMessageCreateAction());
   }

   const changeNewMessage = (text) => {
      props.store.dispatch(changeNewMessageCreateAction(text));
   }

   return <NewMessage addNewMessage={addNewMessage} changeNewMessage={changeNewMessage} textNewMessage={textNewMessage} />
};

export default NewMessageContainer;
