import { connect } from 'react-redux';
import Posts from './Posts';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      postData : state.ADD_NEW_POST_REDUSER.postData
   }
};

export default compose(
   connect(mapStateToProps)
)(Posts);