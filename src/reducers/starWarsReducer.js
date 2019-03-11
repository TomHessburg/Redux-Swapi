import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  characters: [],
  isLoading: true,
  err: null
};
export const charsReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case FETCH_START: 
      return{
        ...state,
        isLoading: true,
        err: null
      }

    case FETCH_SUCCESS: 
      return{
        ...state,
        isLoading: false,
        characters: action.payload.data.results,
        err: null
      }

    case FETCH_FAIL: 
      console.log(action.payload)
      return{
        ...state,
        isLoading: false,
        err: action.payload
      }

    default:
      return state;
  }
};
 