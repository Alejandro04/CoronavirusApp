import {
    SET_COUNTRY_CHART_CONFIRMED_LOADING,
    SET_COUNTRY_CHART_CONFIRMED_SUCCESS,
    SET_COUNTRY_CHART_CONFIRMED_ERROR,
} from "../effects/Countries";

const initialState = {
    data: [],
    loadingConfirmed: false,
    error: ''
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTRY_CHART_CONFIRMED_LOADING: {
            return {
                ...state,
                loadingConfirmed: true,
                error: ''
            };
        }
        case SET_COUNTRY_CHART_CONFIRMED_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loadingConfirmed: false
            }
        }
        case SET_COUNTRY_CHART_CONFIRMED_ERROR: {
            return {
                ...state,
                loading: false,
                loadingConfirmed: action.error
            };
        }
        default: {
            return state;
        }
    }
}