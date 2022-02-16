import styles from './Footer.module.css';


const Footer = () => {
   let dateNow = new Date().getFullYear();

   return (
      <footer className={styles.footer}>
         <p>Copyright {`${dateNow}`} Social Network. Chat, meet, make friends</p>
      </footer>
   )
}

export default Footer;