import { useReducer } from "react";
import { createContext } from "react";
import {Reducerfuncntion} from "./Reducerfunction"
const initState = {
   token:"",
    isAuth: false,
   adminAuth:false
};
export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const [ state, dispatch ] = useReducer(Reducerfuncntion, initState);
    
    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}