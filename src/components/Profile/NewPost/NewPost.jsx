import React from 'react';
import styles from './NewPost.module.css';
import {addNewPostCreateAction, updateTextPostCreateAction} from '../../../redux/profile-reducer'

const NewPost = (props) => {
   let textareaRef = React.createRef();

   const addNewPost = () => {
      props.dispatch(addNewPostCreateAction());
   };

   const updateTextPost = () => {
      const text = textareaRef.current.value;
      props.dispatch(updateTextPostCreateAction(text));
   };

   return (
      <form className={styles.form_new_post} onClick={(e) => { e.preventDefault() }}>
         <textarea ref={textareaRef} value={props.newTextPost} type="text" onChange={updateTextPost} placeholder='Enter your message'></textarea>
         <button type='submit' onClick={addNewPost} className="main_btn">Add your post</button>
      </form>
   );
};

export default NewPost;