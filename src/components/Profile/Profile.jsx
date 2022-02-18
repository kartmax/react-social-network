import styles from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import UserContainer from './User/UserContainer';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = () => {

   return (
      <div className={`${styles.profile_wrap}`}>

         <div className={styles.profile_top}>
            <img alt="description" src="https://img5.goodfon.ru/wallpaper/nbig/9/ec/fon-abstraktsiia-tekstura-1.jpg"></img>
         </div>

         <div className={styles.profile_bottom}>
            <UserContainer />
            <NewPostContainer />
            <PostsContainer />
         </div>

      </div>
   )
}

export default Profile;