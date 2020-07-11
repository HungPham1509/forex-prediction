import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';

export function* fetchPredictedDataSaga(action) {
    yield put(actions.fetchPredictedDataStart());
    try {
        let temp = null;
        yield axios.get('/predicted-forex?f=' + action.forexType)
        .then(response => {
            temp = response.data.data;
        })
        yield put(actions.fetchPredictedDataSuccess(temp));
    } catch (error) {
        yield put(actions.fetchPredictedDataFail(error));
    }
}
