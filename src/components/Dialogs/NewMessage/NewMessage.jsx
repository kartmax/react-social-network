import React from 'react';
import styles from './NewMessage.module.css';

const NewMessage = (props) => {

   let textareaRef = React.createRef();

   const onAddNewMessage = () => {
      props.addNewMessage();
      scrollToLastMessage();
   }

   const onChangeNewMessage = () => {
      let text = textareaRef.current.value;
      props.changeNewMessage(text);
   }

   const scrollToLastMessage = () => {
      setTimeout(()=> {
         const messageUl = document.querySelector('.js_messages');
         const offsetHeight = messageUl.offsetHeight;
         const scrollHeight = messageUl.scrollHeight;
         const scrollSize = scrollHeight - offsetHeight;
         messageUl.scrollTo({
            top: scrollSize,
            left: 0,
            behavior: 'smooth'
         });
      },0);
   };

   return (
      <div className={styles.new_message}>
         <textarea onChange={onChangeNewMessage} value={props.textNewMessage} ref={textareaRef} className={styles.new_message_area} placeholder="Your message"></textarea>
         <button onClick={onAddNewMessage} title='Send your message' className={styles.btn_add_message}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZYjXk0IOKkq5ujQ58N4Biio9TwET4FzP7Q&usqp=CAU" alt="descr" />
         </button>
      </div>
   );
};

export default NewMessage;
