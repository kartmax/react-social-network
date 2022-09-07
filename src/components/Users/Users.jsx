import styles from './Users.module.css';
import defaultUserAvatar from '../../assets/images/avatar.png';
import { NavLink } from 'react-router-dom';
import { UserAPI } from '../api/api';

const Users = (props) => {
   let followClass = (followed) => {
      return {
         class_name: followed ? 'unfollowed' : 'followed',
         text_btn: followed ? 'Remove from friends list' : 'Add to friends list'
      }
   };

   let onFollow = (e) => {
      let userId = e.target.getAttribute('data-user-id');
      let userFollowed = e.target.getAttribute('data-user-followed');

      if(userFollowed == 'true') {
         UserAPI.follow(userId).then(data => {
            if(data.resultCode == 0) {
               props.unfollowAC(userId)
            }
         })
      } else {
         UserAPI.unfollow(userId).then(data => {
            if(data.resultCode == 0) { 
               props.followAC(userId)  
            }
         })
      }
   }

   let counterPagination = Math.ceil(props.totalUsersCount / props.pageSize); 
   let pages = [];
   for (let i = 1; i <= counterPagination; i++) {
      pages.push(i);
   }

   return (
      <div className={styles.users_wrap}>
         <ul className={styles.pagination}>
            {pages.map(p => 
               <li key={p} onClick={()=>{props.onChangePage(p)}} className={p === props.currentPage ? styles.currentPagination : ''}>{p}</li>
            )}
         </ul>
         <ul className={styles.users_list}>
            {props.users.map(user =>
               <li key={user.id} className={styles.users_item}>
                  <div className={styles.body}>
                     <div className={styles.avatar}>
                        <NavLink to={`/profile/${user.id}`}>
                           <img src={user.photos.small != null ? user.photos.small : defaultUserAvatar} alt="Photo user" />
                        </NavLink>
                     </div>
                     <div className={styles.info_wrap}>
                        <p className={styles.name}>{user.name}</p>   
                        <p className={styles.location}>"user.location.city + ' - ' + user.location.country"</p>
                        <p className={styles.status}>{user.status}</p>
                     </div>
                  </div>
                  <button onClick={onFollow} className={`main_btn ${followClass(user.followed).class_name}`} data-user-id={user.id} data-user-followed={user.followed}>{followClass(user.followed).text_btn}</button>
               </li>
            )}
         </ul>
      </div>
   )
}

export default Users;