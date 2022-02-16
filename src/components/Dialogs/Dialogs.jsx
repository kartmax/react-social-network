import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Dialogs = (props) => {
   let dialogElements =
      props.state.dialogData.map((dialog, idx) => <Dialog key={idx} user_id={dialog.id} user_name={dialog.name} user_avatar={dialog.avatar} />);

   let messageElements =
      props.state.messageData.map((message, idx) => <Message key={idx} id={message.id} dialog_id={message.dialog_id} message={message.text} main_user={props.state.mainUser} />);

   return (
      <div className={styles.dialogs_wrap}>
         <ul className={styles.dialogs}>
            {dialogElements}
         </ul>

         <ul className={styles.messages + ' ' + 'js_messages'}>
            {messageElements}
         </ul>

         <div className={styles.new_message_wrap}>
            <NewMessage 
               dispatch={props.dispatch}
               textNewMessage={props.state.textNewMessage} 
            />
         </div>
      </div>
   );
};

export default Dialogs;