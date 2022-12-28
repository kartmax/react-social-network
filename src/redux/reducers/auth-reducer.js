import { UserAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserDataAC = (id, email, login, isAuth) => ( { type : SET_USER_DATA, data: {id, email, login, isAuth} } );

export const authMeTC = () => (dispatch) => {
   UserAPI.authMe().then(data => {
      if (data.resultCode === 0) {
         let {id, email, login} = data.data;
         dispatch(setAuthUserDataAC(id, email, login, true));
      }
   })
}

let initialState = {
      id: null,
      email: null,
      login: null,
      isAuth: false
};

const AUTH_REDUSER = (state = initialState, action) => {
   switch(action.type) {
      case SET_USER_DATA: {
         return {
            ...state, 
            ...action.data,
         }
      }
      
      default: return state;
   };
};

export const loginTC = (email, password, remebmerMe) => (dispath) => {
   UserAPI.login(email, password, remebmerMe)
      .then(response => {
         if(response.data.resultCode === 0) {
            dispath(authMeTC())
         }
      })
} 
export const logoutTC = () => (dispath) => {
   UserAPI.logout()
      .then(response => {
         if(response.data.resultCode === 0) {
            dispath(setAuthUserDataAC(null, null, null, false))
         }
      })
} 

export default AUTH_REDUSER;