import { connect } from 'react-redux';
import Posts from './Posts';

const mapStateToProps = (state) => {
   return {
      stateProfile : state.ADD_NEW_POST_REDUSER
   }
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;