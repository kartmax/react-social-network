import styles from "./Preloader.module.css";
import preloader from "../../../assets/images/preloader.gif";

let Preloader = (props) => {
   return (
      <div className={styles.preloader}>
         <img src={preloader} alt="" />
      </div>
   )
}

export default Preloader;