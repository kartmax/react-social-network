import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirectHOC } from '../../hoc/WithAuthRedirect';

const mapStateToProps = (state) => {
   let stateDialogPage = state.ADD_NEW_MESSAGE_REDUSER;
   return {
      dialogData : stateDialogPage.dialogData,
      messageData : stateDialogPage.messageData,
      main_user : stateDialogPage.mainUser,
   }
};

const AuthRedirectComponent = WithAuthRedirectHOC(Dialogs);

const DialogsContainer = connect(mapStateToProps)(AuthRedirectComponent);

export default DialogsContainer;