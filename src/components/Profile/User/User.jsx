import styles from './User.module.css';
import defaultAvatar from '../../../assets/images/avatar.png';

const User = (props) => {
   let profile = props.profile;

   return (
      <div className={styles.user}>
         <div className={styles.avatar}>
            <img alt="description" src={profile.photos.small != null ? profile.photos.small : defaultAvatar}></img>
         </div>
         <div className={styles.description}>
            <p className={styles.userName}>{profile.fullName}</p>
            <p className={styles.userDescr}>{profile.aboutMe}</p>
            <p className={styles.openWork}>{profile.lookingForAJob == true && 'Ищу работу'}</p>
         </div>
      </div>
   );

};

export default User;