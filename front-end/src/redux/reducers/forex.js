import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_DATA_START:
            return {
                ...state,
                data: [],
                error: null
            }
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null
            }
        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
        }
}

export default reducer