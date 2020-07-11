import * as actionTypes from '../actions/actionTypes';

const initialState = {
    predicted_data: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PREDICTED_DATA_START:
            return {
                ...state,
                predicted_data: [],
                error: null
            }
        case actionTypes.FETCH_PREDICTED_DATA_SUCCESS:
            return {
                ...state,
                predicted_data: action.predicted_data,
                error: null
            }
        case actionTypes.FETCH_PREDICTED_DATA_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
        }
}

export default reducer