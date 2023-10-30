import { useReducer } from "react";
import { createContext } from "react";

const INITIAN_STATE = {
    city:"",
    dates:[],
    options:{
        adult:1,
        children:0,
        room:1
    }
};

export const SearchContex = createContext(INITIAN_STATE);

const SearchReducer = (state,action) =>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAN_STATE;
        default:
            return state;
    }
};

export const SearchContexProvider = ({children}) => {
    const [state,dispatch] = useReducer(SearchReducer,INITIAN_STATE);
    
    return(
        <SearchContex.Provider value={{
            city:state.city,
            dates:state.dates,
            options:state.options,
            dispatch
        }}>
        {children}    
        </SearchContex.Provider>
    )
}