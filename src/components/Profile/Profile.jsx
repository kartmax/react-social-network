import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import User from './User/User';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = () => {

   return (
      <div className={`${styles.profile_wrap}`}>

         <div className={styles.profile_top}>
            <img alt="description" src="https://img5.goodfon.ru/wallpaper/nbig/9/ec/fon-abstraktsiia-tekstura-1.jpg"></img>
         </div>

         <div className={styles.profile_bottom}>
            <User />
            <NewPostContainer />
            <Posts />
         </div>

      </div>
   )
}

export default Profile;