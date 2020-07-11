import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/index';

export function* fetchDataSaga(action) {
    yield put(actions.fetchDataStart());
    try {
        let temp = null;
        yield axios.get('/forex?f=' + action.forexType)
        .then(response => {
            temp = response.data.data;
        })
        yield put(actions.fetchDataSuccess(temp));
    } catch (error) {
        yield put(actions.fetchDataFail(error));
    }
}
