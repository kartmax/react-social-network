import styles from './Post.module.css';

const Paragraph = (props) => {
   return (
      <p>{props.text}</p>
   )
}

const Post = (props) => {
   let paragraphElements = Array.from(props.text).map((text, idx) => <Paragraph key={idx} text={text} /> )

   return (
      <div className={styles.item}>
         <div className={styles.user_photo}>
            <img src={props.src} alt="description" />
         </div>
         <div className={styles.text_wrap}>
            { paragraphElements }
         </div>
         <div className={styles.like}>
            <span className={styles.like_count}>{props.like}</span>
            <img src="https://cdn.worldvectorlogo.com/logos/facebook-reaction-like.svg" alt="description" />
         </div>
      </div>
   );
};

export default Post;