import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  failureFetchUserDetails,
  requestFetchUserDetails,
  successFetchUserDetails,
} from "../actions/usersActions";
import { fetchUserDataService } from "../service/userService";
import { UserTypes } from "../actions/actionTypes";
import { SagaIterator } from "redux-saga";

function* fetchUserDetails(): any {
  try {
    yield put(requestFetchUserDetails());
    const data = yield call(() => fetchUserDataService());
    yield put(successFetchUserDetails(data));
  } catch (error) {
    yield put(failureFetchUserDetails(error as Error));
  }
}

export default function* actionWatcher(): SagaIterator {
  yield all([yield takeLatest(UserTypes.FETCH_USER_DETAILS, fetchUserDetails)]);
}
