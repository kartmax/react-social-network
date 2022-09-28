import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithAuthRedirectHOC } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   let stateDialogPage = state.ADD_NEW_MESSAGE_REDUSER;
   return {
      dialogData : stateDialogPage.dialogData,
      messageData : stateDialogPage.messageData,
      main_user : stateDialogPage.mainUser,
   }
};

export default compose (
   connect(mapStateToProps),
   WithAuthRedirectHOC
)(Dialogs)