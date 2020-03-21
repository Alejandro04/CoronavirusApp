
import Api from '../config/api'

export const SET_COUNTRY_CHART_CONFIRMED_LOADING = 'SET_COUNTRY_CHART_CONFIRMED_LOADING'
export const SET_COUNTRY_CHART_CONFIRMED_SUCCESS = 'SET_COUNTRY_CHART_CONFIRMED_SUCCESS'
export const SET_COUNTRY_CHART_CONFIRMED_ERROR = 'SET_COUNTRY_CHART_CONFIRMED_ERROR'

export const setCountryChartConfirmed = (payload) => dispatch => {
    dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_LOADING });
    Api.setCountryChartConfirmed(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_ERROR, error: 'Error en el servicio' })
        )
};