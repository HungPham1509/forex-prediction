import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {fetchDataSaga} from './forex'
import {fetchPredictedDataSaga} from './predicted-forex'

export function* watchAuth() {
    yield takeEvery(actionTypes.FETCH_DATA, fetchDataSaga)
    yield takeEvery(actionTypes.FETCH_PREDICTED_DATA, fetchPredictedDataSaga)
}

