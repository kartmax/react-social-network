import React from 'react'; 
import styles from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form'
import { ElemFormControl } from '../../global/formControls/FormControls';
import { requreField, maxLengthCreator } from '../../../utils/validators/validators';

const maxLength20 = maxLengthCreator(20);

const NewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={styles.form_new_post}>
         <Field type="text" placeholder='Enter your message' component={ElemFormControl} types='textarea' name='text_post' validate={[requreField, maxLength20]} />
         <button className="main_btn">Add your post</button>
      </form>
   )
}

const NewPostReduxForm = reduxForm({
   form: 'post'
})(NewPostForm);

const NewPost = (props) => {

   const onAddNewPost = (formData) => {
      props.addNewPostAC(formData.text_post);
   };

   return (
      <NewPostReduxForm onSubmit={onAddNewPost} />
   );
};

export default NewPost;