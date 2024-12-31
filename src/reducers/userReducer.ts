import { UserTypes } from "../actions/actionTypes";
import { CreateUserData, UserTypesReducer } from "../types/usertypes";

const initialState: UserTypesReducer = {
  passwordSuccessMsg: "",
  createUserSuccessMsg: "",
  userDeletedMsg: "",
  error: "",
  userData: {} as CreateUserData,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserTypes.SUCCESS_FETCH_USER_DETAILS:
      return { ...state, userData: action.userData };
    case UserTypes.FAILURE_FETCH_USER_DETAILS:
      return { ...state, error: action.error };
    case UserTypes.SUCCESS_UPDATE_USER_DATA:
      return { ...state, passwordSuccessMsg: action.passwordSuccessMsg };
    case UserTypes.FAILURE_UPDATE_USER_DATA:
      return { ...state, error: action.error };
    case UserTypes.SUCCESS_CREATE_USER_DETAILS:
      return { ...state, createUserSuccessMsg: action.createUserSuccessMsg };
    case UserTypes.FAILURE_CREATE_USER_DETAILS:
      return { ...state, error: action.error };
    case UserTypes.SUCCESS_DELETE_USER_DETAILS:
      return { ...state, userDeletedMsg: action.userDeletedMsg };
    case UserTypes.FAILURE_DELETE_USER_DETAILS:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
