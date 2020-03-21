
import Api from '../config/api'

export const SET_COUNTRY_CHART_CONFIRMED_LOADING = 'SET_COUNTRY_CHART_CONFIRMED_LOADING'
export const SET_COUNTRY_CHART_CONFIRMED_SUCCESS = 'SET_COUNTRY_CHART_CONFIRMED_SUCCESS'
export const SET_COUNTRY_CHART_CONFIRMED_ERROR = 'SET_COUNTRY_CHART_CONFIRMED_ERROR'

export const SET_COUNTRY_CHART_RECOVERED_LOADING = 'SET_COUNTRY_CHART_RECOVERED_LOADING'
export const SET_COUNTRY_CHART_RECOVERED_SUCCESS = 'SET_COUNTRY_CHART_RECOVERED_SUCCESS'
export const SET_COUNTRY_CHART_RECOVERED_ERROR = 'SET_COUNTRY_CHART_RECOVERED_ERROR'

export const SET_COUNTRY_CHART_DEATH_LOADING = 'SET_COUNTRY_CHART_RECOVERED_LOADING'
export const SET_COUNTRY_CHART_DEATH_SUCCESS = 'SET_COUNTRY_CHART_RECOVERED_SUCCESS'
export const SET_COUNTRY_CHART_DEATH_ERROR = 'SET_COUNTRY_CHART_RECOVERED_ERROR'


/* A PESAR QUE YA ESTÁ DENTRO DEL EFFECTS - COUNTRIES.JS. ESTE APARTADO NOS AYUDAR A
TRANSFORMAR EL STATE A PROPS EN EL PADRE */
export const setCountryChartConfirmed = (payload) => dispatch => {
    dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_LOADING });
    Api.setCountryChartConfirmed(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_ERROR, error: 'Error en el servicio' })
        )
};

export const setCountryChartRecovered = (payload) => dispatch => {
    dispatch({ type: SET_COUNTRY_CHART_RECOVERED_LOADING });
    Api.setCountryChartRecovered(payload)(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_CHART_RECOVERED_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_CHART_RECOVERED_ERROR, error: 'Error en el servicio' })
        )
};

export const setCountryChartDeath = (payload) => dispatch => {
    dispatch({ type: SET_COUNTRY_CHART_DEATH_LOADING });
    Api.setCountryChartDeath(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_CHART_DEATH_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_CHART_DEATH_ERROR, error: 'Error en el servicio' })
        )
};