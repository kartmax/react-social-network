import {addNewPostCreateAction, updateTextPostCreateAction} from '../../../redux/profile-reducer'
import NewPost from './NewPost';

const NewPostContainer = (props) => {
   let newTextPost = props.store.getState().ADD_NEW_POST_REDUSER.newTextPost;

   const addNewPost = () => {
      props.store.dispatch(addNewPostCreateAction());
   };

   const updateTextPost = (text) => {
      props.store.dispatch(updateTextPostCreateAction(text));
   };

   return <NewPost addNewPost={addNewPost} updateTextPost={updateTextPost} newTextPost={newTextPost} />;
};

export default NewPostContainer;