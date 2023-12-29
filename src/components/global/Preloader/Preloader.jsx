import styles from "./Preloader.module.css";

let Preloader = (props) => {
   return (
      <div className={styles.preloader}>
         <div className={styles.loaderSpiner}></div>
      </div>
   )
}

export default Preloader;