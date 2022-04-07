import { combineReducers } from 'redux';

const initialState = []
  
export default function setDataReducer(state = initialState, action) {
    switch (action.type) {
        case 'data/dataLoaded': {
            return [...state, action.payload]
        }
        default:
            return state
    }
}

export async function fetchData(dispatch, getState) {
const res = await fetch('http://localhost:8080/api/db').then(
    (data) => data.json())
    dispatch({ type: 'data/dataLoaded', payload: res[0] })
}


export const rootReducer = combineReducers({
    setDataReducer
})
