import { connect } from 'react-redux';
import { addNewPostAC } from '../../../redux/reducers/profile-reducer'
import NewPost from './NewPost';
import { compose } from 'redux';

const mapDispatchToProps = {
      addNewPostAC
}

export default compose(
   connect('', mapDispatchToProps)
)(NewPost);