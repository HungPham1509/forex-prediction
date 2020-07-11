import * as actionTypes from './actionTypes';

export const fetchPredictedDataStart = () => {
    return {
        type: actionTypes.FETCH_PREDICTED_DATA_START
    }
}

export const fetchPredictedDataFail = (error) => {
    return {
        type: actionTypes.FETCH_PREDICTED_DATA_FAIL,
        error: error
    }
}

export const fetchPredictedDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PREDICTED_DATA_SUCCESS,
        predicted_data: data
    }
}

export const fetchPredictedData = (forexType) => {
    return {
        type: actionTypes.FETCH_PREDICTED_DATA,
        forexType: forexType
    }
}