import * as actionTypes from './actionTypes';

export const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
}

export const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    }
}

export const fetchData = (forexType) => {
    return {
        type: actionTypes.FETCH_DATA,
        forexType: forexType
    }
}