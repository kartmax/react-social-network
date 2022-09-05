import { NavLink } from 'react-router-dom';
import FrindesContainer from './Frindes/FrindesContainer';
import styles from './Nav.module.css';

const Nav = () => {
   let activeClass = ({isActive}) => isActive ? 'active_link' : '';
   
   return (
      <nav className={styles.nav}>
         <div className={styles.wrapper}>
            <ul>
               <li className={styles.item}>
                  <NavLink to='/profile' className={activeClass}>Profile</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/dialogs' className={activeClass}>Messages</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/users' className={activeClass}>Users</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/news' className={activeClass}>News</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/music' className={activeClass}>Music</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/settings' className={activeClass}>Settings</NavLink>
               </li>
            </ul>
         </div>

         <FrindesContainer />
      </nav>
   )
}

export default Nav;