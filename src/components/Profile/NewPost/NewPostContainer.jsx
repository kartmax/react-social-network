import { addNewPostCreateAction, updateTextPostCreateAction } from '../../../redux/profile-reducer'
import StoreContext from '../../../StoreContext';
import NewPost from './NewPost';

const NewPostContainer = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let newTextPost = store.getState().ADD_NEW_POST_REDUSER.newTextPost;

               const addNewPost = () => {
                  store.dispatch(addNewPostCreateAction());
               };

               const updateTextPost = (text) => {
                  store.dispatch(updateTextPostCreateAction(text));
               };

               return <NewPost addNewPost={addNewPost} updateTextPost={updateTextPost} newTextPost={newTextPost} />;
            }
         }
      </StoreContext.Consumer>
   )

};

export default NewPostContainer;