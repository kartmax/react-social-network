import styles from './Header.module.css';

const Header = () => {
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
      </header>
   )
}

export default Header;