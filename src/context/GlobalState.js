import React, { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
    watchlist: [],
    watched: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   const addMovie = (movie) => {
    dispatch({type: 'ADD_MOVIE', payload: movie})
   }

   const removeMovie = (id) => {
    dispatch({type: 'REMOVE', payload: id})
   }

    return(
        <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, addMovie: addMovie, removeMovie }} >
            {children}
        </GlobalContext.Provider>
    )
}