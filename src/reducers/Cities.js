import {
    SET_COUNTRY_FOR_GET_CITIES_LOADING,
    SET_COUNTRY_FOR_GET_CITIES_SUCCESS,
    SET_COUNTRY_FOR_GET_CITIES_ERROR,
} from "../effects/Countries";

const initialState = {
    data: [],
    loadingCities: false,
    error: ''
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTRY_FOR_GET_CITIES_LOADING: {
            return {
                ...state,
                loadingCities: true,
                error: ''
            };
        }
        case SET_COUNTRY_FOR_GET_CITIES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loadingCities: false
            }
        }
        case SET_COUNTRY_FOR_GET_CITIES_ERROR: {
            return {
                ...state,
                loading: false,
                loadingCities: action.error
            };
        }
        default: {
            return state;
        }
    }
}