import { createContext , useContext, useReducer} from "react";

//preparing the datalayer
export const StateContext= createContext();
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}

    </StateContext.Provider>    

);
// Hook which allows us to pull info from the dataLayer
export const useStateValue =()=> useContext(StateContext);