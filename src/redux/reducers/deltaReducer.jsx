import * as types from "../actions/actionTypes";
import initialState from "./initialState";

// Perils of having a nested tree strucutre in the Redux State XD XD XD
export default function deltaReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ANIME_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_ANIME_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: "" };
    case types.FETCH_ANIME_FAILURE:
      return { ...state, loading: false, data: [], error: action.payload };
    // case types.SET_COLOR:
    //   return { ...state, color: action.payload };
    // case types.SET_POKELIST:
    //   return { ...state, pokelist: action.payload };

    default:
      return state;
  }
}
