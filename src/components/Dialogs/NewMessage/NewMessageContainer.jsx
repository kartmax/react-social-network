import { addNewMessageCreateAction, changeNewMessageCreateAction } from '../../../redux/messages-reduser';
import StoreContext from '../../../StoreContext';
import NewMessage from './NewMessage';

const NewMessageContainer = () => {

   return (
      
      <StoreContext.Consumer>
         {
            (store) => {
               let textNewMessage = store.getState().ADD_NEW_MESSAGE_REDUSER.textNewMessage;

               const addNewMessage = () => {
                  store.dispatch(addNewMessageCreateAction());
               }

               const changeNewMessage = (text) => {
                  store.dispatch(changeNewMessageCreateAction(text));
               }

               return <NewMessage addNewMessage={addNewMessage} changeNewMessage={changeNewMessage} textNewMessage={textNewMessage} />
            }
         }
      </StoreContext.Consumer>
   )

};

export default NewMessageContainer;
