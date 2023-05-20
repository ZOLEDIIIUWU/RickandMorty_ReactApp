import { ADD_FAV, REMOVE_FAV, FILTER_FAV, ORDER_FAV } from "./actionTypes";
import axios from "axios";

export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav'
    return async(dispatch)=> {
        try {
        const { data } = await axios.post(endpoint, character)
        return dispatch({
            type: ADD_FAV,
            payload: data,
        });
        }
        catch (error) {
            return { error: error.message}
        }
    }
}

export const removeFavorite = (id) => {
    try {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return async(dispatch) => {
            const { data } = await axios.delete(endpoint)
            return dispatch ({
                type: REMOVE_FAV,
                payload: data
            })
        }
    }
    catch (error) {
        return {error: error.message}
    }
}

export const filterFav = (gender) => {
    return { type: FILTER_FAV, payload: gender}
}

export const orderFav = (order) => {
    return { type: ORDER_FAV, payload: order}
}

