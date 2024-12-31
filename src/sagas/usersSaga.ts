import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  failureCreateUser,
  failureDeleteUser,
  failureFetchUserDetails,
  failureUserPassword,
  requestCreateUser,
  requestDeleteUser,
  requestFetchUserDetails,
  requestUserPassword,
  successCreateUser,
  successDeleteUser,
  successFetchUserDetails,
  successUserPassword,
} from "../actions/usersActions";
import {
  createUserService,
  deleteUserService,
  fetchUserDataService,
  updateUserPasswordService,
} from "../service/userService";
import { UserTypes } from "../actions/actionTypes";
import { SagaIterator } from "redux-saga";
import { CreateUserData, UpdatePasswordProps } from "../types/usertypes";

function* fetchUserDetails(userName?: string): any {
  try {
    yield put(requestFetchUserDetails());
    const data = yield call(() => fetchUserDataService(userName));
    yield put(successFetchUserDetails(data));
  } catch (error) {
    yield put(failureFetchUserDetails(error as Error));
  }
}

function* updateUserPassword(props?: UpdatePasswordProps): any {
  try {
    yield put(requestUserPassword());
    yield call(() => updateUserPasswordService(props as UpdatePasswordProps));
    yield put(successUserPassword());
  } catch (error) {
    yield put(failureUserPassword(error as Error));
  }
}

function* createUser(props?: CreateUserData): any {
  try {
    yield put(requestCreateUser());
    yield call(() => createUserService(props));
    yield put(successCreateUser());
  } catch (error) {
    yield put(failureCreateUser(error as Error));
  }
}

function* deleteUser(userName?: string): any {
  try {
    yield put(requestDeleteUser());
    yield call(() => deleteUserService(userName));
    yield put(successDeleteUser());
  } catch (error) {
    yield put(failureDeleteUser(error as Error));
  }
}

export default function* actionWatcher(): SagaIterator {
  yield all([
    yield takeLatest(UserTypes.FETCH_USER_DETAILS, fetchUserDetails),
    yield takeLatest(UserTypes.UPDATE_USER_DATA, updateUserPassword),
    yield takeLatest(UserTypes.CREATE_USER_DETAILS, createUser),
    yield takeLatest(UserTypes.DELETE_USER_DETAILS, deleteUser),
  ]);
}
