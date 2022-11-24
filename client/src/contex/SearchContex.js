import { createContext, useReducer } from "react"

const INITIAL_STATE={
    city:undefined,
    data:[],
    option:{
        adult:undefined,
        children:undefined,
        room:undefined
    }
}


export const SearchContext = createContext(INITIAL_STATE)

const SearchReducer = (state,action)=>{
    switch(action.type){
        case "NEW_SCRACH":
            return action.payload
        case "REST_SCRACH":
            return INITIAL_STATE
        default:
            return state
    }
}



export const SerachContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(SearchReducer,INITIAL_STATE)

    return (
        <SearchContext.Provider value={{city:state.city,data:state.data,option:state.option,dispatch}}>
            {children}
        </SearchContext.Provider>
    )
}