const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserDataAC = (id, email, login) => ( { type : SET_USER_DATA, data: {id, email, login} } );

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
            isAuth: true
         }
      }
      
      default: return state;
   };
};

export default AUTH_REDUSER;