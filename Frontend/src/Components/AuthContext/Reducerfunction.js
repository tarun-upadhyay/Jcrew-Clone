export const Reducerfuncntion = (state, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return {
          ...state,
          isLoading: true,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuth: true,
          token: action.payload,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          isError: true,
        };

        case "LOGIN_ADMIN":
            return{
                ...state,
                isAuth: true,
                token: action.payload,
                adminAuth: true
            }
            case "LOGOUT":
              return  {
                    ...state,
                    isAuth: false,
                     token:"",
                  adminAuth: false
                }

      default:
        return state;
    }
  };