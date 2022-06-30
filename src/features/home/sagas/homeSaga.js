import { put, call } from 'redux-saga/effects';
import httpStatus from 'http-status';

import * as homeAction from '../actions';
import {home} from '../../../api/endpoints/home'

export function* testFunction(payload) {
  try {
    console.log('SAGAAA', payload);
    const { info } = payload;
    const { data, status } = yield call(home, info);

    if (status !== httpStatus.OK) {
      throw new Error();
    }
    console.log("datadata",data)
    yield put(homeAction.testRequestSuccess(data?.entries));
  } catch (error) {
    console.log('SAGAAA');
    yield put(homeAction.testRequestfailed());
  }
}
