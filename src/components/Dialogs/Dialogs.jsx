import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {

   let dialogElements =
      props.dialogData.map((dialog, idx) => <Dialog key={idx} user_id={dialog.id} user_name={dialog.name} user_avatar={dialog.avatar} />);

   let messageElements =
      props.messageData.map((message, idx) => <Message key={idx} id={message.id} dialog_id={message.dialog_id} message={message.text} main_user={props.main_user} />);

   if(!props.isAuth) return <Navigate to='/login' />
   return (
      <div className={styles.dialogs_wrap}>
         <ul className={styles.dialogs}>
            {dialogElements}
         </ul>

         <ul className={styles.messages + ' ' + 'js_messages'}>
            {messageElements}
         </ul>

         <div className={styles.new_message_wrap}>
            <NewMessageContainer />
         </div>
      </div>
   );

};

export default Dialogs;