
import Api from '../config/api'

export const LOAD_COUNTRIES_LOADING = 'REDUX_THUNK_LOAD_COUNTRIES_LOADING';
export const LOAD_COUNTRIES_SUCCESS = 'REDUX_THUNK_LOAD_COUNTRIES_SUCCESS';
export const LOAD_COUNTRIES_ERROR = 'REDUX_THUNK_LOAD_COUNTRIES_ERROR';

export const SET_COUNTRY_LOADING = 'SET_COUNTRY_LOADING'
export const SET_COUNTRY_SUCCESS = 'SET_COUNTRY_SUCCESS'
export const SET_COUNTRY_ERROR = 'SET_COUNTRY_ERROR'

export const SET_COUNTRY_CHART_CONFIRMED_LOADING = 'SET_COUNTRY_CHART_CONFIRMED_LOADING'
export const SET_COUNTRY_CHART_CONFIRMED_SUCCESS = 'SET_COUNTRY_CHART_CONFIRMED_SUCCESS'
export const SET_COUNTRY_CHART_CONFIRMED_ERROR = 'SET_COUNTRY_CHART_CONFIRMED_ERROR'

export const SET_COUNTRY_CHART_RECOVERED_LOADING = 'SET_COUNTRY_CHART_RECOVERED_LOADING'
export const SET_COUNTRY_CHART_RECOVERED_SUCCESS = 'SET_COUNTRY_CHART_RECOVERED_SUCCESS'
export const SET_COUNTRY_CHART_RECOVERED_ERROR = 'SET_COUNTRY_CHART_RECOVERED_ERROR'

export const SET_COUNTRY_CHART_DEATH_LOADING = 'SET_COUNTRY_CHART_RECOVERED_LOADING'
export const SET_COUNTRY_CHART_DEATH_SUCCESS = 'SET_COUNTRY_CHART_RECOVERED_SUCCESS'
export const SET_COUNTRY_CHART_DEATH_ERROR = 'SET_COUNTRY_CHART_RECOVERED_ERROR'

export const loadCountries = () => dispatch => {
    dispatch({ type: LOAD_COUNTRIES_LOADING });
    Api.getCountries()
        .then(response => response.json())
        .then(
            data => dispatch({ type: LOAD_COUNTRIES_SUCCESS, data }),
            error => dispatch({ type: LOAD_COUNTRIES_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};

export const setCountry = (payload) => dispatch => {

    dispatch({ type: SET_COUNTRY_LOADING });
    Api.setCountry(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_ERROR, error: 'Error en el servicio' })
        )

    /* ESTO ME AYUDA A REUSAR EL MISMO REDUXFORM, UNA SOLA ACCIÓN DEL USUARIO QUE EJECUTE EL DISPATCH*/
    dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_SUCCESS });
    Api.setCountryChartConfirmed(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_CHART_CONFIRMED_ERROR, error: 'Error en el servicio' })
        )

    dispatch({ type: SET_COUNTRY_CHART_RECOVERED_LOADING });
    Api.setCountryChartRecovered(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_CHART_RECOVERED_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_CHART_RECOVERED_ERROR, error: 'Error en el servicio' })
        )

    dispatch({ type: SET_COUNTRY_CHART_DEATH_LOADING });
    Api.setCountryChartDeath(payload)
        .then(response => response.json())
        .then(
            data => dispatch({ type: SET_COUNTRY_CHART_DEATH_SUCCESS, data }),
            error => dispatch({ type: SET_COUNTRY_CHART_DEATH_ERROR, error: 'Error en el servicio' })
        )
};