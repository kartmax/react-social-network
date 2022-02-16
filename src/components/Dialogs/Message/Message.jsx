import styles from './Message.module.css';

const Message = (props) => {
   const Paragraph = (props) => {
      return (
         <p>{props.paragraph_text}</p>
      );
   };
   let messageElements =
      Array.from(props.message).map((text, idx) => <Paragraph key={idx} paragraph_text={text} />);

   let addedClass = '';
   if (props.dialog_id !== props.main_user.id) {
      addedClass = 'your_message';
   } else {
      addedClass = 'my_message';
   }

   return (
      <li className={styles.message_item}>
         <div className={styles.message_wrap + ' ' + styles[addedClass]}>
            {messageElements}
         </div>
      </li>
   );
};

export default Message;