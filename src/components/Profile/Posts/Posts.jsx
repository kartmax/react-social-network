import styles from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
   let postElements = 
         props.postData.map( (post, idx) => <Post key={ idx } id={ post.id } text={ post.text } like={ post.like } src={ post.avatar } /> );

   return (
      <div className={styles.posts}>
         { postElements }
      </div>
   );
};

export default Posts;