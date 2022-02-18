import { connect } from 'react-redux';
import { addNewPostCreateAction, updateTextPostCreateAction } from '../../../redux/profile-reducer'
import NewPost from './NewPost';

const mapStateToProps = (state) => {
   return {
      newTextPost : state.ADD_NEW_POST_REDUSER.newTextPost
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      addNewPost : () => {
         dispatch(addNewPostCreateAction());
      },

      updateTextPost : (text) => {
         dispatch(updateTextPostCreateAction(text));
      }
   }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);


export default NewPostContainer;