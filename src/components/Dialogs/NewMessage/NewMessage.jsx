import React from 'react';
import styles from './NewMessage.module.css';
import { Field, reduxForm } from 'redux-form'
import { requreField, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../global/formControls/FormControls';

const maxLength20 = maxLengthCreator(20);

const NewMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.new_message}>
         <Field placeholder="Your message" type="text" name="message" component={Textarea} validate={[requreField, maxLength20]} />
         <button title='Send your message' className={styles.btn_add_message}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZYjXk0IOKkq5ujQ58N4Biio9TwET4FzP7Q&usqp=CAU" alt="descr" />
         </button>
      </form>
   )
}

const NewMessageReduxFormContainer = reduxForm({
   form: 'new_message'
 })(NewMessageForm)

const NewMessage = (props) => {

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

   const onAddNewMessage = (formData) => {
      props.addNewMessageAC(formData.message);
      scrollToLastMessage();
   }
   
   return (
      <NewMessageReduxFormContainer onSubmit={onAddNewMessage} />
   );
};

export default NewMessage;
