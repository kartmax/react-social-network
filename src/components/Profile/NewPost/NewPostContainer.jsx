import { connect } from 'react-redux';
import { addNewPostAC, updateTextPostAC } from '../../../redux/reducers/profile-reducer'
import NewPost from './NewPost';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      newTextPost : state.ADD_NEW_POST_REDUSER.newTextPost
   }
};

const mapDispatchToProps = {
      addNewPostAC,
      updateTextPostAC
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps)
)(NewPost);