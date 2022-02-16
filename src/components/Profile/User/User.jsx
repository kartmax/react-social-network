import styles from './User.module.css';

const User = (props) => {
   return (
      <div className={styles.user}>
         <div className={styles.avatar}>
            <img alt="description" src={props.main_user.avatar}></img>
         </div>
         <div className={styles.description}>

         </div>
      </div>
   );
};

export default User;