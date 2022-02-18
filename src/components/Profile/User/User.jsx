import StoreContext from '../../../StoreContext';
import styles from './User.module.css';

const User = (props) => {

   let main_user = props.state;

   return (
      <div className={styles.user}>
         <div className={styles.avatar}>
            <img alt="description" src={main_user.avatar}></img>
         </div>
         <div className={styles.description}>

         </div>
      </div>
   );

};

export default User;