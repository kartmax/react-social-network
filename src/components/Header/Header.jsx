import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return (
      <header className={styles.header}>
         <div className={styles.logo}>
            <div className={styles.logo_icon}>
               <img alt='description' src='https://image.freepik.com/free-vector/3d-social-media-icons-background_52683-28863.jpg'></img>
            </div>
            <div className={styles.logo_text}>
               <p>Social Network</p>
               <span>Chat, meet, make friends</span>
            </div>
         </div>
         <div className={styles.loginWrap}>
            {props.isAuth 
               ? <div className={styles.wrapLogOut}>{props.login} - {props.id}<button onClick={props.logout} className={styles.login_link}>LogOut</button></div>
               : <NavLink to='/login' className={styles.login_link}>Login</NavLink>}
         </div>
      </header>
   )
}

export default Header;