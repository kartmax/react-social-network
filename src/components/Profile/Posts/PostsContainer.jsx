import { connect } from 'react-redux';
import Posts from './Posts';

const mapStateToProps = (state) => {
   return {
      postData : state.ADD_NEW_POST_REDUSER.postData
   }
};

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;