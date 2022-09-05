import React from 'react'; 
import styles from './NewPost.module.css';

const NewPost = (props) => {
   let textareaRef = React.createRef();

   const onAddNewPost = () => {
      props.addNewPostAC();
   };

   const onUpdateTextPost = () => {
      const text = textareaRef.current.value;
      props.updateTextPostAC(text);
   };

   return (
      <form className={styles.form_new_post} onClick={(e) => { e.preventDefault() }}>
         <textarea ref={textareaRef} value={props.newTextPost} type="text" onChange={onUpdateTextPost} placeholder='Enter your message'></textarea>
         <button type='submit' onClick={onAddNewPost} className="main_btn">Add your post</button>
      </form>
   );
};

export default NewPost;