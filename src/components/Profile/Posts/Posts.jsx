import styles from './Posts.module.css';
import Post from './Post/Post';
import StoreContext from '../../../StoreContext';

const Posts = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let stateProfile = store.getState().ADD_NEW_POST_REDUSER;
               
               let postElements =
                  stateProfile.postData.map((post, idx) => <Post key={idx} id={post.id} text={post.text} like={post.like} src={post.avatar} />);

               return (
                  <div className={styles.posts}>
                     {postElements}
                  </div>
               );
            }
         }
      </StoreContext.Consumer>
   )

};

export default Posts;