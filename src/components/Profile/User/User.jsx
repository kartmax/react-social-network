import styles from './User.module.css';
import defaultAvatar from '../../../assets/images/avatar.png';
import React from 'react';

class User extends React.Component {
   state = {
      isEditStatus : false,
      status : this.props.status
   }

   onActiveEditMode() {
      this.setState({
         isEditStatus : true
      })
   }
   offActiveEditMode() {
      this.setState({
         isEditStatus : false
      })
      this.props.updateStatus(this.state.status)
   }
   onStatusChange = (e) => {
      this.setState({
         status : e.target.value
      })
   }

   render () {
      return (
         <div className={styles.user}>
            <div className={styles.avatar}>
               <img alt="alt-text" src={this.props.profile.photos.small !== null ? this.props.profile.photos.small : defaultAvatar}></img>
            </div>
            <div className={styles.description}>
               <p className={styles.userName}>{this.props.profile.fullName}</p>
               {this.state.isEditStatus &&
                  <input autoFocus={true} onChange={ (e)=>{this.onStatusChange(e)} } onBlur={ ()=>{this.offActiveEditMode()} } type="text" value={this.state.status} />
               }
               {!this.state.isEditStatus && 
                  <p onClick={ ()=>{this.onActiveEditMode()} } className={styles.userDescr}>{this.props.status || 'Статус не заполнен'}</p>
               }
               <p className={styles.openWork}>{this.props.profile.lookingForAJob === true ? 'Ищу работу' : 'Не ищу работу'}</p>
            </div>
         </div>
      );
   }

};

export default User;