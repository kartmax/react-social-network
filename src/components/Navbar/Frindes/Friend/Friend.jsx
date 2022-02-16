import { NavLink } from 'react-router-dom';
import styles from './Friend.module.css';

const Friend = (props) => {
   return (
      <li className={styles.frindes_item}>
         <NavLink to={`/dialogs/${props.user_id}`} className={styles.user_link}>
            <span className={styles.user_photo}>
               <img src={props.user_avatar} alt="descr" />
            </span>
            <span className={styles.user_name}>{props.user_name}</span>
         </NavLink>
      </li>
   );
};

export default Friend;