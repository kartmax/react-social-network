import Friend from './Friend/Friend';
import styles from './Frindes.module.css';

const Frindes = (props) => {
      let state = props.state;

      let frindesData =
         state.frindes.map((friend, idx) => <Friend
            key={idx}
            user_id={friend.id}
            user_avatar={friend.avatar}
            user_name={friend.name}
         />)

      return (
         <div className={styles.frindes}>
            <h3 className="sidebar-group-title">Frindes</h3>
            <ul className={styles.frindes_list}>
               {frindesData}
            </ul>
         </div>
      );

};

export default Frindes;