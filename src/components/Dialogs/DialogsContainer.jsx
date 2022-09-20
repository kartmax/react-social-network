import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   let stateDialogPage = state.ADD_NEW_MESSAGE_REDUSER;
   return {
      dialogData : stateDialogPage.dialogData,
      messageData : stateDialogPage.messageData,
      main_user : stateDialogPage.mainUser,
      isAuth: state.AUTH_REDUSER.isAuth
   }
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;