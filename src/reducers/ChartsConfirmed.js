import {
    SET_COUNTRY_CHART_CONFIRMED_LOADING,
    SET_COUNTRY_CHART_CONFIRMED_SUCCESS,
    SET_COUNTRY_CHART_CONFIRMED_ERROR,
} from "../effects/Charts";

const initialState = {
    data: [],
    loading: false,
    error: ''
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTRY_CHART_CONFIRMED_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case SET_COUNTRY_CHART_CONFIRMED_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case SET_COUNTRY_CHART_CONFIRMED_ERROR: {
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