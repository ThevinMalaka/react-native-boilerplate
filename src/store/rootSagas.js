/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */

import {all} from 'redux-saga/effects';
import {homeSaga} from '../features/home/sagas';

export default function* rootSaga() {
  yield all([...homeSaga]);
}
