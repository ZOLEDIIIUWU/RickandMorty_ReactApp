import { ADD_FAV, FILTER_FAV, ORDER_FAV, REMOVE_FAV } from "./actionTypes"
import axios from "axios";

const initialState = {
    myFavorites: [],
    allcharacters: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: payload,
                allcharacters: payload
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: payload
            }

        case FILTER_FAV:
            let characterFilter =  state.allCharacter.filter((character) => character.gender === payload)

            return {
                ...state,
                myFavorites: characterFilter,
            }

        case ORDER_FAV:
            const orderCharacter = state.allCharacter.sort((a, b)=> {
                if(payload === "A") {
                    if(a.id < b.id ) return -1;
                    if(b.id < a.id) return 1
                    return 0
                }
                else {
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return - 1
                    return 0
                }
            
            })
            return {
                ...state,
                myFavorites: [...orderCharacter]
            }

        default:
            return { ...state }
    }
}

export default reducer