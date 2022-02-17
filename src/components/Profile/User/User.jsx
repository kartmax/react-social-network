import StoreContext from '../../../StoreContext';
import styles from './User.module.css';

const User = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               let main_user = store.getState().ADD_NEW_POST_REDUSER.mainUser;

               return (
                  <div className={styles.user}>
                     <div className={styles.avatar}>
                        <img alt="description" src={main_user.avatar}></img>
                     </div>
                     <div className={styles.description}>

                     </div>
                  </div>
               );
            }
         }
      </StoreContext.Consumer>
   )

};

export default User;