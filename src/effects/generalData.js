const FETCH_START = 'start'
const FETCH_SUCCESS = 'success'
const FETCH_ERROR = 'error'

const fetch_start = () => ({
    type: FETCH_START
})
const fetch_success = payload => ({
    type: FETCH_SUCCESS,
    payload
})
const fetch_error = error => ({
    type: FETCH_ERROR,
    error
})

const url = 'https://covid19.mathdro.id/api'

const initialState = {
    data: [],
    fetching: false,
    error: null
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                data: action.error
            }
        default:
            return state
    }
}

export default payload => {
    return async function (dispatch, getState) {
        dispatch(fetch_start())
        try {
            const result = await fetch(url)
            const json = await result.json()
            dispatch(fetch_success(json))
        } catch (error) {
            dispatch(fetch_error(error))
        }
    };
}