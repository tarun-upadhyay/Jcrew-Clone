export const loginRequest = (payload)=>{
    return(
        {
            type: 'LOGIN_REQUEST',
            payload
        }
    )
}
export function loginSuccess(payload){
    return{
        type: "LOGIN_SUCCESS",
        payload
    }
};
export const loginFailure = (payload) => {
    return { type: "LOGIN_FAILURE", payload };
  };
  export const loginAdmin = (payload)=>{
    return { type: "LOGIN_ADMIN", payload}
  }
  export const handleLogout = ()=>{
    return { type: "LOGOUT"}
  }