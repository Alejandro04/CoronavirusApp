import { LOAD_COUNTRIES_ERROR, 
    LOAD_COUNTRIES_LOADING, 
    LOAD_COUNTRIES_SUCCESS,
    SET_COUNTRY_LOADING,
    SET_COUNTRY_SUCCESS,
    SET_COUNTRY_ERROR
 } from "../effects/Countries";

const initialState = {
    data: {
        confirmed: {
            value: 0,
            detail: "https://covid19.mathdro.id/api/countries/venezuela/confirmed",
        },
        recovered: {
            value: 0,
            detail: "https://covid19.mathdro.id/api/countries/venezuela/recovered",
        },
        deaths: {
            value: 0,
            detail: "https://covid19.mathdro.id/api/countries/venezuela/deaths",
        }
    },
    loading: false,
    error: ''
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_COUNTRIES_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_COUNTRIES_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_COUNTRIES_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        case SET_COUNTRY_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case SET_COUNTRY_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case SET_COUNTRY_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}