import {
    SET_COUNTRY_CHART_DEATH_LOADING,
    SET_COUNTRY_CHART_DEATH_SUCCESS,
    SET_COUNTRY_CHART_DEATH_ERROR,
} from "../effects/Countries";

const initialState = {
    data: [],
    loadingDeath: false,
    error: ''
};
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_COUNTRY_CHART_DEATH_LOADING: {
            return {
                ...state,
                loadingDeath: true,
                error: ''
            };
        }
        case SET_COUNTRY_CHART_DEATH_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loadingDeath: false
            }
        }
        case SET_COUNTRY_CHART_DEATH_ERROR: {
            return {
                ...state,
                loadingDeath: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}