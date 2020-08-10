import * as types from "./actionTypes";
import axios from "axios";
// import { dispatch } from "d3";

//Action creators
const fetchAnimeSuccess = (x) => ({
  type: types.FETCH_ANIME_SUCCESS,
  payload: x,
});
const fetchAnimeFailure = (e) => ({
  type: types.FETCH_ANIME_FAILURE,
  payload: e,
});
const fetchAnimeRequest = () => ({ type: types.FETCH_ANIME_REQUEST });

// export const setColor = (x) => ({
//   type: types.SET_COLOR,
//   payload: x,
// });

// export const getPokelist = () => {
//   type: types.GET_POKELIST;
// };

// export const setPokelist = (x) => ({
//   type: types.SET_POKELIST,
//   payload: x,
// });

// thunk making the api call
export const fetchData = (input = "") => {
  return (dispatch) => {
    dispatch(fetchAnimeRequest);
    axios({
      method: "GET",
      url: "https://jikan1.p.rapidapi.com/search/anime",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        "x-rapidapi-key": "d89108a862mshe13e47a1cabedbep1a1454jsna00a211f3ea3",
        useQueryString: true,
      },
      params: {
        q: input,
      },
    })
      .then((res) => {
        const data = res.data.results;
        dispatch(fetchAnimeSuccess(data));
      })
      .catch((error) => {
        const errormsg = error.message;
        dispatch(fetchAnimeFailure(errormsg));
      });
  };
};

// export const fetchPokelist = () => {
//   return (dispatch) => {
//     dispatch(fetchPokemonRequest);
//     axios
//       .get(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
//       .then((res) => {
//         const data = res.data.results;
//         dispatch(setPokelist(data));
//       })
//       .catch((error) => {
//         const errormsg = error.message;
//         dispatch(fetchPokemonFailure(errormsg));
//       });
//   };
// };
