const initialState = {
    user: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
          return { ...state, user: action.payload };
        case "LOGOUT_USER":
          return { ...state, user: null }; // Réinitialiser l'utilisateur
        default:
          return state;
      }
  };
  
  export default userReducer;