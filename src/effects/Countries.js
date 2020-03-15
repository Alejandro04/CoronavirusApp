
import Api from '../config/api'

export const LOAD_COUNTRIES_LOADING = 'REDUX_THUNK_LOAD_COUNTRIES_LOADING';
export const LOAD_COUNTRIES_SUCCESS = 'REDUX_THUNK_LOAD_COUNTRIES_SUCCESS';
export const LOAD_COUNTRIES_ERROR = 'REDUX_THUNK_LOAD_COUNTRIES_ERROR';

export const loadCountries = () => dispatch => {
   dispatch({ type: LOAD_COUNTRIES_LOADING });
   Api.getCountries()
       .then(response => response.json())
       .then(
           data => dispatch({ type: LOAD_COUNTRIES_SUCCESS, data }),
           error => dispatch({ type: LOAD_COUNTRIES_ERROR, error: error.message || 'Unexpected Error!!!' })
       )
};