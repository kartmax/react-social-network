import { connect } from 'react-redux';
import { addNewPostAC, updateTextPostAC } from '../../../redux/reducers/profile-reducer'
import NewPost from './NewPost';

const mapStateToProps = (state) => {
   return {
      newTextPost : state.ADD_NEW_POST_REDUSER.newTextPost
   }
};

const mapDispatchToProps = {
      addNewPostAC,
      updateTextPostAC
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);


export default NewPostContainer;