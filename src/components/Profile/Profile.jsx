import styles from './Profile.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import User from './User/User';

const Profile = (props) => {
   return (
      <div className={`${styles.profile_wrap}`}>

         <div className={styles.profile_top}>
            <img alt="description" src="https://img5.goodfon.ru/wallpaper/nbig/9/ec/fon-abstraktsiia-tekstura-1.jpg"></img>
         </div>

         <div className={styles.profile_bottom}>
            <User main_user={props.state.mainUser} />
            <NewPost 
               newTextPost={props.state.newTextPost} 
               dispatch={props.dispatch}
            />
            <Posts postData={props.state.postData} />
         </div>

      </div>
   )
}

export default Profile;