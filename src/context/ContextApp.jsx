import { createContext } from "react";

export const ContextApp = createContext();

export const ContextProvider = ({childen}) =>{
    return(
        <ContextApp.Provider value={{}}>
            {childen}
        </ContextApp.Provider>
    )
}