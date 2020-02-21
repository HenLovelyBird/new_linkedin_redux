export default (state = {}, action) => {
    switch (action.type) {
      case "SET_LOGIN":
        return {
          ...state,
          userToken: action.payload.user,
          currentUser: action.payload.user,
          currentPassword: action.payload.pass
        };
  
      case "RESET_LOGIN":
        return {
          ...state,
          currentUser: "",
          currentPassword: ""
        };
  
      default:
        return state;
    }
  };